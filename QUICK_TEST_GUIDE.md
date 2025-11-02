# 🧪 Quick Test Guide - EmailJS Form

## The Problem

You're not receiving **Full Name**, **Email**, and **Service Type** in your emails.

---

## ✅ The Solution

**Your code is correct!** The issue is with your **EmailJS template configuration**.

Your form sends these variable names:
- `from_name` (Full Name)
- `from_email` (Email)
- `service_type` (Service Type)

Your EmailJS template **MUST** use these exact names with double curly braces.

---

## 🔧 Quick Fix Steps

### **Step 1: Go to Your Template**
Visit: https://dashboard.emailjs.com/admin/templates/template_w5eh1y4

### **Step 2: Copy This Template**

**Subject Line:**
```
New Contact: {{from_name}} - {{subject}}
```

**Email Body (Plain Text):**
```
📧 NEW CONTACT FORM SUBMISSION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 FULL NAME:
{{from_name}}

📧 EMAIL ADDRESS:
{{from_email}}

📱 PHONE NUMBER:
{{phone}}

🎯 SERVICE TYPE:
{{service_type}}

📌 SUBJECT:
{{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE:

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{from_email}}
```

### **Step 3: Save Template**
Click **"Save"** in EmailJS dashboard

### **Step 4: Test It**

1. **In EmailJS Dashboard:**
   - Click **"Test It"** button
   - Fill test values:
     - `from_name`: John Doe
     - `from_email`: john@example.com
     - `phone`: +880 1234567890
     - `service_type`: Full-Stack Web Development
     - `subject`: Test Subject
     - `message`: Test message
   - Click **"Send Test"**
   - Check your email

2. **On Your Website:**
   - Refresh page (Ctrl+F5)
   - Open browser console (F12)
   - Fill out the form
   - Click "Send Message"
   - Check console for these logs:
     ```
     📧 Sending email with parameters: {...}
     ✅ Full Name: [your name]
     ✅ Email: [your email]
     ✅ Service Type: [selected service]
     EmailJS Success! 200 OK
     ```
   - Check your email at `mdalabidsupto@gmail.com`

---

## 🚨 Common Mistakes

### ❌ **WRONG Template Variables:**
```
{{name}}          ← Should be {{from_name}}
{{email}}         ← Should be {{from_email}}
{{service}}       ← Should be {{service_type}}
```

### ✅ **CORRECT Template Variables:**
```
{{from_name}}     ← Full Name
{{from_email}}    ← Email Address
{{service_type}}  ← Service Type
{{phone}}         ← Phone Number
{{subject}}       ← Subject
{{message}}       ← Message
```

---

## 📋 Verification Checklist

- [ ] Template ID is `template_w5eh1y4`
- [ ] Template uses `{{from_name}}` (not `{{name}}`)
- [ ] Template uses `{{from_email}}` (not `{{email}}`)
- [ ] Template uses `{{service_type}}` (not `{{service}}`)
- [ ] Template saved in EmailJS
- [ ] Test email sent from EmailJS dashboard
- [ ] Test email received successfully
- [ ] Form tested on website
- [ ] Console shows correct parameters
- [ ] Email received with all fields

---

## 🎯 What the Code Sends

```javascript
{
  from_name: "John Doe",              // ← Full Name field
  from_email: "john@example.com",     // ← Email field
  phone: "+880 1234567890",           // ← Phone field
  service_type: "Full-Stack Web Development", // ← Service dropdown
  subject: "Need a website",          // ← Subject field
  message: "I would like...",         // ← Message field
  to_email: "mdalabidsupto@gmail.com" // ← Your email
}
```

Your template must use these exact variable names!

---

## 💡 Quick Debug

1. **Open website**
2. **Press F12** (Developer Tools)
3. **Go to Console tab**
4. **Fill form and submit**
5. **Look for:**
   ```
   📧 Sending email with parameters: {...}
   ✅ Full Name: [shows the name you entered]
   ✅ Email: [shows the email you entered]
   ✅ Service Type: [shows the service you selected]
   EmailJS Success! 200 OK
   ```

If you see all these logs, **your form is working correctly!**

The issue is with your EmailJS template configuration.

---

## 🆘 Still Not Working?

### Check EmailJS History:
1. Go to: https://dashboard.emailjs.com/admin
2. Click **"History"** or **"Logs"**
3. Find your recent submission
4. Click to view details
5. Check what parameters were received
6. Compare with what your template expects

### Most Common Fix:
Your template is probably using `{{name}}` instead of `{{from_name}}`.

**Solution:** Update your template to use the correct variable names listed above.

---

**Template ID:** `template_w5eh1y4`  
**Service ID:** `service_qo4rofm`  
**Public Key:** `48J9Yj3KrrvXA0s2T`

✅ **Your code is correct!**  
🔧 **Fix your EmailJS template!**

