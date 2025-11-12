# Contact Form Setup

The contact form uses **Web3Forms** - a free, privacy-focused form backend service.

## Setup Instructions

### Option 1: Web3Forms (Recommended - Free)

1. **Get your Access Key**:
   - Go to https://web3forms.com
   - Enter your email address (alex@alexchin.co.uk)
   - You'll receive an access key instantly via email

2. **Add the Access Key**:
   - Open `src/components/pages/Contact.tsx`
   - Replace `YOUR_ACCESS_KEY_HERE` on line 67 with your actual access key

   ```tsx
   <input type="hidden" name="access_key" value="your-actual-key-here" />
   ```

3. **Done!** The form will now send submissions to your email.

### Features

- ✅ **Free forever** - No account required
- ✅ **Privacy-focused** - No tracking or data collection
- ✅ **Spam protection** - Built-in honeypot and reCAPTCHA support
- ✅ **Email notifications** - Instant delivery to your inbox
- ✅ **No backend needed** - Works entirely client-side

### Testing

1. Fill out the form on your contact page
2. Submit it
3. Check your email (alex@alexchin.co.uk) for the submission

### Alternative: Environment Variable (More Secure)

For better security, you can use an environment variable:

1. Create `.env` file:

   ```
   VITE_WEB3FORMS_KEY=your-access-key-here
   ```

2. Update Contact.tsx:

   ```tsx
   <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
   ```

3. Add to Vercel:
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Add `VITE_WEB3FORMS_KEY` with your access key

### Customization

You can customize the form behavior in `src/components/pages/Contact.tsx`:

- **Subject line**: Change the `subject` hidden input
- **Success message**: Modify the success message text
- **Redirect**: Add a redirect URL after submission
- **Additional fields**: Add more form fields as needed

### Spam Protection

To add reCAPTCHA (optional):

1. Get reCAPTCHA keys from https://www.google.com/recaptcha
2. Add to your form:
   ```tsx
   <input type="hidden" name="recaptcha_site_key" value="your-site-key" />
   ```

For more options, visit: https://docs.web3forms.com
