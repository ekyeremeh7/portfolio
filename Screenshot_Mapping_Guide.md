# Screenshot Mapping Guide for Google Play 16KB Support Article

## Screenshot References and Corresponding Images

**Note**: The screenshots show the process AFTER requesting an extension. The first image shows the extension granted notification, not the initial policy violation.

### 1. Extension Granted Notification Screenshot
**Referenced Name**: `screenshots/notification-card.png`
**Your Screenshot**: The first image showing the extension granted notification with:
- Red alert badge "Action by 31 May"
- Message: "We've given you more time to fix a policy violation"
- Details: "We recently told you that your app does not support the 16 KB memory page sizes. You now have until 31 May 2026 to fix this issue, and to continue releasing updates to your app."
- "View details" link in red text

**Description**: This is the notification card that appears AFTER you've been granted an extension, showing your new deadline of May 31, 2026.

---

### 2. Issue Details Page Screenshot
**Referenced Name**: `screenshots/issue-details-page.png`
**Your Screenshot**: The second image showing the "Issue details" page with:
- Title: "Issue details" with "← Policy status" link
- Main issue: "App must support 16 KB memory page sizes"
- Status: Warning icon with "You won't be able to release app updates (27 days away)"
- Date sent: "27 Aug 2025"
- Deadline: "1 Nov 2025"
- Policy explanation and "How to fix" section
- "Need more time?" section at the bottom

**Description**: This is the detailed policy page explaining the 16KB requirement and how to fix it.

---

### 3. Extension Request Section Screenshot
**Referenced Name**: `screenshots/extension-request-section.png`
**Your Screenshot**: The same as #2 above - the bottom section of the Issue Details page showing:
- "Need more time?" section
- Text: "If you need more time to update your app, you can request an extension to this deadline. If you request more time, you'll have until 31 May 2026 to update your app."
- Blue button: "Request additional time"

**Description**: This is the section at the bottom of the Issue Details page where you can request an extension.

---

### 4. Extension Request Modal Screenshot
**Referenced Name**: `screenshots/extension-request-modal.png`
**Your Screenshot**: The third image showing the modal dialog with:
- Header: "Request additional time" with close (X) button
- New deadline: "Your new due date will be 31 May (238 days away)"
- Agreement clause about using time to update app
- "Provide reason (Select all that apply)" section
- Blue "Request" button at bottom right

**Description**: This is the modal that opens when you click "Request additional time".

---

### 5. Reason Selection Screenshot
**Referenced Name**: `screenshots/reason-selection.png`
**Your Screenshot**: The fourth image showing the same modal but with checkboxes selected:
- Same modal as #4 above
- Four checkboxes are checked:
  - ✅ "It requires me to make extensive changes to my app"
  - ✅ "I don't have the time to prioritise this change right now"
  - ✅ "This change requires an internal audit and approval process"
  - ✅ "This change requires an external audit and approval process"
- Other checkboxes are unchecked
- Blue "Request" button at bottom right

**Description**: This shows the modal with reason selections made.

---

### 6. Submit Request Screenshot
**Referenced Name**: `screenshots/submit-request.png`
**Your Screenshot**: The same as #5 above - this is the final step where you click the "Request" button.

**Description**: This is the final step of the extension request process.

---

## File Organization Recommendations

### Create Screenshots Folder Structure:
```
screenshots/
├── notification-card.png          (Image 1)
├── issue-details-page.png         (Image 2)
├── extension-request-section.png   (Image 2 - bottom section)
├── extension-request-modal.png    (Image 3)
├── reason-selection.png           (Image 4)
└── submit-request.png             (Image 4 - same as reason-selection)
```

### Alternative: Use Descriptive Names
If you prefer more descriptive names:
```
screenshots/
├── 01-notification-card.png
├── 02-issue-details-page.png
├── 03-extension-request-modal.png
├── 04-reason-selection.png
└── 05-submit-request.png
```

---

## Image Processing Tips

### For Medium Publication:
1. **Resize images** to fit Medium's layout (recommended width: 800px)
2. **Add captions** to each image explaining what it shows
3. **Use alt text** for accessibility
4. **Compress images** to reduce file size

### For LinkedIn Article:
1. **Use high resolution** images for better visibility
2. **Add descriptive captions** below each image
3. **Ensure images are readable** on mobile devices

---

## Article Integration

### Update Image References in Article:
Replace the current image references with your actual screenshot names:

```markdown
![Google Play Console Notification](screenshots/notification-card.png)
![Issue Details Page](screenshots/issue-details-page.png)
![Extension Request Section](screenshots/extension-request-section.png)
![Extension Request Modal](screenshots/extension-request-modal.png)
![Reason Selection](screenshots/reason-selection.png)
![Submit Request](screenshots/submit-request.png)
```

### Add Image Captions:
Consider adding captions below each image for better context:

```markdown
![Google Play Console Notification](screenshots/notification-card.png)
*Figure 1: Google Play Console notification card showing 16KB policy violation*

![Issue Details Page](screenshots/issue-details-page.png)
*Figure 2: Detailed policy page explaining 16KB requirement and extension option*
```

---

## Next Steps

1. **Create screenshots folder** in your project directory
2. **Save your screenshots** with the referenced names
3. **Update the article** with correct image paths
4. **Test image display** in your chosen publishing platform
5. **Add captions** for better user experience

This mapping ensures your screenshots are properly organized and referenced in the article!
