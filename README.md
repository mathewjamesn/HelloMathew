# Hello Mathew

A React Native hello world app: a **Welcome** button that shows "Hello mathew" when tapped.

## How the APK is built

No local tools are needed. On every push to `main`, the GitHub Actions workflow in
`.github/workflows/build-apk.yml`:

1. Generates a fresh React Native 0.81.4 project.
2. Copies `App.tsx` from this repo into it.
3. Builds a release APK with Gradle.
4. Uploads it as the `hello-mathew-apk` artifact.

## Getting the APK

Open the **Actions** tab, open the latest **Build APK** run, and download
`hello-mathew-apk` from the **Artifacts** section. Unzip it and install
`app-release.apk` on an Android phone (allow "Install unknown apps").

The APK is signed with a debug key, so it can be installed on your own phone but
not published to the Play Store.
