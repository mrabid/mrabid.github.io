# EmailJS Integration Setup Guide

## ✅ **Integration Complete!**

Your contact form is now integrated with EmailJS. Follow these steps to complete the setup:

---

## 📋 **Step 1: Get Your EmailJS Public Key**

1. **Go to EmailJS Dashboard:**
   - Visit: https://dashboard.emailjs.com/
   - Log in to your EmailJS account

2. **Navigate to Account Settings:**
   - Click on your profile icon (top right)
   - Select **"Account"** → **"General"**
   - Or go directly to: https://dashboard.emailjs.com/admin/integration

3. **Copy Your Public Key:**
   - Find the **"Public Key"** section
   - Click **"Copy"** to copy your Public Key

4. **Update the Code:**
   - Open `index.html`
   - Find line ~1639: `emailjs.init("YOUR_PUBLIC_KEY");`
   - Replace `YOUR_PUBLIC_KEY` with your actual Public Key
   - Example: `emailjs.init("abc123xyz456");`

---

## 📧 **Step 2: Create EmailJS Email Template**

### **Template Configuration:**

1. **Go to Email Templates:**
   - Visit: https://dashboard.emailjs.com/admin/template/nd6o7ss
   - Or navigate to: **Dashboard** → **Email Templates** → **Edit Template**

2. **Template Settings:**
   - **Template Name:** Contact Form Submission (or any name you prefer)
   - **Template ID:** `template_w5eh1y4` (already set)

### **Template Content:**

#### **Subject Line:**
```
New Contact Form Submission: {{subject}}
```

Or:
```
Portfolio Contact: {{from_name}} - {{subject}}
```

#### **Email Body (HTML Format):**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 20px -30px;
    }
    .header h2 {
      margin: 0;
      font-size: 24px;
    }
    .info-section {
      margin: 20px 0;
      padding: 15px;
      background-color: #f9f9f9;
      border-left: 4px solid #667eea;
      border-radius: 4px;
    }
    .info-row {
      margin: 12px 0;
      padding: 8px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: bold;
      color: #667eea;
      display: inline-block;
      min-width: 120px;
    }
    .value {
      color: #333;
    }
    .message-box {
      margin-top: 20px;
      padding: 20px;
      background-color: #f0f7ff;
      border-left: 4px solid #667eea;
      border-radius: 4px;
    }
    .message-box h3 {
      margin-top: 0;
      color: #667eea;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      text-align: center;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📧 New Contact Form Submission</h2>
    </div>
    
    <div class="info-section">
      <div class="info-row">
        <span class="label">👤 Full Name:</span>
        <span class="value">{{from_name}}</span>
      </div>
      
      <div class="info-row">
        <span class="label">📧 Email:</span>
        <span class="value">{{from_email}}</span>
      </div>
      
      <div class="info-row">
        <span class="label">📱 Phone:</span>
        <span class="value">{{phone}}</span>
      </div>
      
      <div class="info-row">
        <span class="label">🎯 Service Type:</span>
        <span class="value">{{service_type}}</span>
      </div>
      
      <div class="info-row">
        <span class="label">📌 Subject:</span>
        <span class="value">{{subject}}</span>
      </div>
    </div>
    
    <div class="message-box">
      <h3>💬 Message:</h3>
      <p style="white-space: pre-wrap; margin: 0;">{{message}}</p>
    </div>
    
    <div class="footer">
      <p>This email was sent from your portfolio website contact form.</p>
      <p>Reply directly to: <strong>{{from_email}}</strong></p>
    </div>
  </div>
</body>
</html>
```

#### **Plain Text Version (Alternative):**

If you prefer plain text, use this simpler version:

```
📧 New Contact Form Submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Full Name: {{from_name}}

📧 Email: {{from_email}}

📱 Phone: {{phone}}

🎯 Service Type: {{service_type}}

📌 Subject: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 Message:

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from your portfolio website.
Reply directly to: {{from_email}}
```

---

## 📝 **Step 3: Template Variable Mapping**

Make sure your EmailJS template uses these variables (they're already configured in the code):

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `{{from_name}}` | Client's full name | "John Doe" |
| `{{from_email}}` | Client's email address | "john@example.com" |
| `{{phone}}` | Client's phone number | "+880 1742 314777" or "Not provided" |
| `{{service_type}}` | Selected service type | "Full-Stack Web Development" |
| `{{subject}}` | Message subject | "Need a website for my business" |
| `{{message}}` | Client's message | "I would like to discuss..." |
| `{{to_email}}` | Your email (recipient) | "mdalabidsupto@gmail.com" |

---

## ⚙️ **Step 4: Email Service Configuration**

### **Verify Your Email Service:**

1. **Go to Email Services:**
   - Visit: https://dashboard.emailjs.com/admin/service
   - Find service: `service_qo4rofm`

2. **Check Service Settings:**
   - Make sure your email service is properly connected
   - Verify the recipient email: `mdalabidsupto@gmail.com`
   - Test the service connection

---

## 🧪 **Step 5: Test Your Form**

1. **Open Your Website:**
   - Open `index.html` in a browser or deploy to your hosting

2. **Fill Out the Form:**
   - Enter your test details
   - Select a service type
   - Write a test message

3. **Submit the Form:**
   - Click "Send Message"
   - Check your email inbox (`mdalabidsupto@gmail.com`)
   - Verify all information is received correctly

---

## 🔧 **Troubleshooting**

### **Issue: Form not sending emails**

**Solutions:**
1. ✅ Verify Public Key is correctly set (not "YOUR_PUBLIC_KEY")
2. ✅ Check browser console for errors (F12 → Console)
3. ✅ Verify Service ID: `service_qo4rofm`
4. ✅ Verify Template ID: `template_w5eh1y4`
5. ✅ Check EmailJS dashboard for any error logs

### **Issue: Email received but variables are empty**

**Solutions:**
1. ✅ Ensure template variables match exactly: `{{from_name}}`, `{{from_email}}`, etc.
2. ✅ Check that all form fields have correct `id` attributes
3. ✅ Verify EmailJS template has all variables defined

### **Issue: "emailjs is not defined" error**

**Solutions:**
1. ✅ Ensure EmailJS SDK is loaded before form handler
2. ✅ Check internet connection (EmailJS uses CDN)
3. ✅ Verify EmailJS script is in the correct position in HTML

---

## 📋 **Quick Checklist**

- [ ] EmailJS Public Key added to `index.html` (line ~1639)
- [ ] Email template created with Template ID: `template_nd6o7ss`
- [ ] Template includes all variables: `from_name`, `from_email`, `phone`, `service_type`, `subject`, `message`
- [ ] Email service (`service_qo4rofm`) is connected and working
- [ ] Recipient email set to: `mdalabidsupto@gmail.com`
- [ ] Test form submission successful
- [ ] Email received with all correct information

---

## 🎉 **You're All Set!**

Once you complete these steps, your contact form will:
- ✅ Send emails directly to `mdalabidsupto@gmail.com`
- ✅ Include all form field information
- ✅ Display success/error messages to users
- ✅ Work on both desktop and mobile devices

---

## 📞 **Support**

If you encounter any issues:
1. Check EmailJS Dashboard: https://dashboard.emailjs.com/
2. Review EmailJS Documentation: https://www.emailjs.com/docs/
3. Check browser console for detailed error messages

---

**Last Updated:** 2025
**Integration Status:** ✅ Complete
**Service ID:** `service_qo4rofm`
**Template ID:** `template_w5eh1y4`
**Recipient Email:** `mdalabidsupto@gmail.com`

