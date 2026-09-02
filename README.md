# Toddlerish

An offline, local-first companion for parents of toddlers. Look up a worrying
behaviour, get reassurance that it's normal and why, then gentle-parenting
tricks to help. No accounts, no backend, no ads — everything ships bundled in
the app, and the only network calls are RevenueCat's for the one-time
"unlock everything" purchase.

Built with Expo SDK 57, TypeScript (strict), and Expo Router (file-based
routing).

## Getting started

```bash
npm install
npm start        # then press i / a / w, or scan the QR code
```

In-app purchases use `react-native-purchases`, a native module — it will not
load inside Expo Go. For anything IAP-related you need a
[development build](https://docs.expo.dev/develop/development-builds/introduction/):

```bash
npx expo prebuild
npx expo run:ios      # or: npx expo run:android
```

Until RevenueCat is configured (see below), `useEntitlement()` transparently
falls back to a local, on-device "dev unlock" so the paywall and all gated
content can be built and tested without any store setup — including in Expo
Go and on web.

Useful scripts:

- `npm run typecheck` — `tsc --noEmit`
- `npm run web` — run in a browser, fastest way to iterate on layout/theme

## 1. Adding content to `/data`

All copy lives in two typed arrays, cross-linked by id:

- `data/behaviours.ts` — the "Is this normal?" entries
- `data/tricks.ts` — the "what helps" entries
- `data/types.ts` — the `Behaviour` and `Trick` shapes
- `data/index.ts` — lookup + search helpers used by the screens; you
  shouldn't need to touch this when just adding content

To add a new behaviour:

1. Add an object to the `behaviours` array in `data/behaviours.ts` with a
   unique `id`.
2. List the ids of any tricks that help in `trickIds`.
3. On each of those tricks (in `data/tricks.ts`), add this behaviour's id to
   its `behaviourIds` array — the link is two-way, so both detail screens can
   cross-reference each other ("What helps" / "Try it with").
4. Set `isFree: true` if it should be available without purchasing, or
   `false` to gate it behind the "Unlock everything" paywall.
5. `tags` drive which pose Elena (the mascot) uses on that behaviour's detail
   screen — see `lib/mascot.ts`'s `poseForBehaviour()` for the exact rules
   (food/eating → eat, milestone/development → blocks, feelings/overwhelm →
   bunny, otherwise → calm).

Adding a trick works the same way, in `data/tricks.ts`.

Nothing else needs to change — screens, search, and the Saved tab all read
from these files.

## 2. Swapping branding in `theme.ts`

`theme.ts` at the project root is the single source of truth for colours,
fonts, type scale, spacing, and corner radii. Every themed component
(`components/Card.tsx`, `Chip.tsx`, `ListRow.tsx`, `ScreenHeader.tsx`,
`Button.tsx`, `LockBadge.tsx`, `SearchBar.tsx`, `EmptyState.tsx`) reads from
it — change a value there and it updates everywhere.

To re-skin the app:

- Edit the `colors` palette for a different mood.
- Swap `fonts.hand` / `fonts.body` / `fonts.bodyBold` for different loaded
  font families (update the `useFonts()` call in `app/_layout.tsx` to match).
- Adjust `type`, `spacing`, or `radii` to change scale/density.

### Mascot ("Elena")

`components/Mascot.tsx` maps a pose key to a static image in
`/assets/mascot/`. Nine placeholder PNGs are checked in (`wave`, `eat`,
`blocks`, `bunny`, `crawl`, `point`, `sippy`, `teddy`, `calm`) — replace each
file in place with the real artwork and nothing else needs to change. See the
build brief / `lib/mascot.ts` for which pose appears on which screen.

### App icon / splash

`assets/images/icon.png`, `android-icon-*.png`, `favicon.png`, and
`splash-icon.png` are placeholders referenced from `app.json`. Swap them in
place (same filenames) when the real assets are ready. Keep the app icon
text-free per the brand brief.

## 3. Configuring RevenueCat + Codemagic / EAS Submit

### RevenueCat (in-app purchase)

1. Create a project in the [RevenueCat dashboard](https://app.revenuecat.com)
   with an iOS app and an Android app.
2. Create a single non-consumable/lifetime product in App Store Connect and
   Google Play Console (e.g. `unlock_everything`), and attach both to an
   **Offering** in RevenueCat with a default package.
3. Create an **Entitlement** called `unlock_everything` (matches
   `ENTITLEMENT_ID` in `lib/purchases.ts`) and attach both store products to
   it.
4. Copy the iOS and Android **public** API keys from RevenueCat and expose
   them as `EXPO_PUBLIC_REVENUECAT_API_KEY_IOS` / `EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID`
   wherever the app gets built — Metro inlines any `EXPO_PUBLIC_*` var at
   build time. Locally that's a `.env` file (gitignored); on Codemagic that's
   an environment variable group attached to the `expo-ios` workflow in
   `codemagic.yaml` (see below) — RevenueCat's public SDK keys are safe to
   ship client-side, but keep them out of git regardless.
5. Rebuild a dev client (`npx expo prebuild && npx expo run:ios`) — once a
   key is present, `useEntitlement()` automatically switches from the local
   dev-unlock fallback to real RevenueCat purchases/restore.

If you rename the entitlement or offering, update `ENTITLEMENT_ID` /
`OFFERING_ID` in `lib/purchases.ts` to match.

### Codemagic (iOS builds — no Mac needed)

`codemagic.yaml` at the repo root defines an `expo-ios` workflow that builds
a real, signed iOS binary on Codemagic's cloud Macs and uploads it straight
to TestFlight — this is how you get the app onto an iPhone without owning a
Mac and without Expo Go (which can't load native modules like RevenueCat).

What it does, in order: installs deps, runs `expo prebuild --platform ios
--clean` to generate the native `ios/` project (gitignored — it's
regenerated fresh on every build, never committed), stamps a unique build
number, signs with the `codemagicFlutter` App Store Connect integration and
the `Ios_signing` variable group, `pod install`s, builds the `.ipa` for the
`Toddlerish` scheme, and submits it to TestFlight.

Prerequisites (one-time, in App Store Connect / Codemagic — not code):

- An app record for `com.toddlerish.app` already created in App Store
  Connect (and the bundle id registered in the Apple Developer portal) —
  `fetch-signing-files --create` makes certificates/profiles, not the app
  record itself.
- The `codemagicFlutter` App Store Connect integration and the
  `Ios_signing` variable group (`APP_STORE_CONNECT_KEY_IDENTIFIER`,
  `APP_STORE_CONNECT_ISSUER_ID`, `APP_STORE_CONNECT_PRIVATE_KEY`,
  `CERTIFICATE_PRIVATE_KEY_PASSWORD`) already exist in this Codemagic
  team — reused from other apps, nothing Toddlerish-specific to set up there.
- Once RevenueCat is configured, add an env var group (e.g. `RevenueCat`)
  with `EXPO_PUBLIC_REVENUECAT_API_KEY_IOS` and uncomment its line under
  `environment.groups` in `codemagic.yaml`.

To run it: connect this repo in the Codemagic dashboard (if not already),
then either push to trigger it (if a trigger is configured) or hit **Start
new build** → `expo-ios`. The build shows up in TestFlight (under App Store
Connect → TestFlight → Toddlerish) within a few minutes of the build
finishing — install it via the TestFlight app on your iPhone.

There's no Android workflow yet — ask and I'll add one; it's the faster path
to "see it running" since it just needs an APK you sideload directly, no
Apple account or TestFlight round-trip involved.

### EAS Build + Submit (alternative, not currently wired up)

1. `npm install -g eas-cli` (or use `npx eas-cli`), then `eas login`.
2. `eas build:configure` to attach this project to an EAS project — this
   fills in `extra.eas.projectId` in `app.json`.
3. Set real values in `ios.bundleIdentifier` / `android.package` in
   `app.json` (currently `com.toddlerish.app`) to match what you register in
   App Store Connect / Google Play Console.
4. Build profiles live in `eas.json`:
   - `development` — dev client, internal distribution, for local testing
     with IAP.
   - `preview` — internal distribution build for TestFlight/internal
     testers without a dev client.
   - `production` — store-ready build.

   ```bash
   eas build --profile development --platform ios
   eas build --profile production --platform all
   ```
5. Fill in `submit.production` in `eas.json` with your real Apple ID, App
   Store Connect app id, Apple Team ID, and a path to a Google Play service
   account JSON key, then:

   ```bash
   eas submit --platform ios --profile production
   eas submit --platform android --profile production
   ```

## v1 scope

Browse, search, read, save, and one one-time unlock — deliberately no
tracker/logging, accounts, community, notifications, analytics, or
age-expansion packs. See the build brief for the full rationale.
