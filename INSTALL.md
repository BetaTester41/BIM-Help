# Installation Instructions

## Install Using ZIP File

1. Download the latest ZIP file from the [release page](https://github.com/BetaTester41/BIM-Help/releases/latest) or from the [dev page](https://github.com/BetaTester41/BIM-Help/archive/refs/heads/main.zip).
2. Extract the file to somewhere easy to access
**Warning: Do not delete this folder after the install; Chrome will disable BIM-Help if this folder is not in the expected location**
3. In your Chrome Browser menu, click `Windows > Extensions` or type `chrome://extensions/` in the address bar
4. Check the `Developer Mode` checkbox
5. Click the `Load unpacked extension` button and navigate to the folder you downloaded in step 1.

* Note that each time you restart Chrome you will be prompted to `Disable Developer Mode Extensions`. Feel free to simply hit `X` and continue.

<img src="https://cdn.techjourney.net/2020/05/chrome-disable-dev-mode-extensions.png" height="193"/>  <br />
# Troubleshooting
 **Warning: The following is for advanced Windows users only! Improperly editing the registry can result in a unstable system!**

## Remove Developer Popup

If you see the following message: “This extension is not listed in the Chrome Web Store and may have been added without your knowledge”, follow the steps below to use BIM-Help without enabling Developer Mode.

1. Find the extension-id for BIM-Help by going to `chrome://extensions/`.

2. Open `regedit` (you can type that into the start menu) as an administrator

3. Navigate to `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\`

4. Create a new key called `ExtensionInstallWhitelist`, if it doesn’t already exist

5. Create a new string value for this key called “1” (or any number higher than what is already there) and set it to the extension-id you found on step 1.

6. Restart Chrome.

Note: you may need to update the extension-id for newer versions of BIM-Help

## Keeping the Extension Updated

### **For Chrome Enterprise / Chromium users:**

If you add the following Key\'s to the HKLM or HKCU, no other actions need to be taken to install BIM-Help

`[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist]
"1"="EXTENSION_ID HERE;XML_COMING_SOON"`

For the Edge Beta you can set the same key in this location.

`[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallForcelist]`

For the Brave Browser you can set the same key here:

`[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\BraveSoftware\Brave\ExtensionInstallForcelist]`
