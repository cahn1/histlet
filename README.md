# History Allowlist Manager

A Chrome extension to control which domains are allowed to be recorded in your browser history, using custom regular expressions (regex). All other domains are automatically removed from your history. Optionally, you can apply this rule to incognito mode as well.

---

## Features
- Add, view, and remove allowlist domain patterns using regex.
- Only URLs matching your allowlist are kept in your browsing history.
- Optionally apply the allowlist to incognito browsing.
- Clean, modern popup UI with Google Sans font.

---

## Installation

### From the Chrome Web Store (Recommended)
Once published, simply:
1. Visit the Chrome Web Store page for "History Allowlist Manager".
2. Click **Add to Chrome**.
3. The extension will be installed automatically—no need to download or clone any files.

### Developer Mode (For Developers/Testing)
1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select this extension's directory.

---

## Permissions & Why They Are Needed

This extension requests only the permissions necessary for its functionality:

- **history**: To monitor and remove history entries that do not match your allowlist.
- **storage**: To save your allowlist and settings (including incognito preference) locally in Chrome.
- **tabs**: To properly detect incognito context and handle history events accurately.
- **scripting**: Required by Chrome Manifest V3 for background logic and communication between popup and background scripts.
- **<all_urls> (host permissions)**: To ensure the extension can check all visited URLs against your allowlist.

**We do NOT collect, transmit, or share your browsing data. All processing is done locally in your browser.**

---

## License

This project is licensed under the MIT License:

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contributing & Contact

Pull requests and suggestions are welcome! For questions or support, please open an issue or contact the maintainer. 