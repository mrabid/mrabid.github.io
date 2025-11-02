# 📧 EmailJS Template Setup - IMPORTANT

## Your Template ID: `template_w5eh1y4`

---

## 🚨 **CRITICAL: Template Variable Names**

Your form sends these exact variable names to EmailJS. Your template **MUST** use these exact names:

### **Required Template Variables:**

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `{{from_name}}` | Client's full name | "John Doe" |
| `{{from_email}}` | Client's email | "john@example.com" |
| `{{phone}}` | Client's phone | "+880 1742 314777" or "Not provided" |
| `{{service_type}}` | Selected service | "Full-Stack Web Development" |
| `{{subject}}` | Message subject | "Need a website" |
| `{{message}}` | Client's message | "I would like to discuss..." |
| `{{to_email}}` | Your email (recipient) | "mdalabidsupto@gmail.com" |

---

## 📝 **EmailJS Template Configuration**

### **Step 1: Go to Your Template**
Visit: https://dashboard.emailjs.com/admin/templates/template_w5eh1y4

### **Step 2: Set Subject Line**
```
New Contact: {{from_name}} - {{subject}}
```

Or simpler:
```
Portfolio Contact Form: {{subject}}
```

### **Step 3: Email Content (Copy This Exactly)**

#### **Option 1: HTML Template (Recommended)**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f7fa;
    }
    .container {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 25px;
      border-radius: 10px 10px 0 0;
      margin: -30px -30px 25px -30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 26px;
      font-weight: 600;
    }
    .info-section {
      margin: 20px 0;
      padding: 20px;
      background-color: #f8f9fa;
      border-left: 4px solid #667eea;
      border-radius: 5px;
    }
    .info-row {
      margin: 15px 0;
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: 700;
      color: #667eea;
      display: inline-block;
      min-width: 140px;
      font-size: 14px;
    }
    .value {
      color: #2c3e50;
      font-size: 15px;
    }
    .message-box {
      margin-top: 25px;
      padding: 20px;
      background: linear-gradient(to bottom, #f0f7ff, #ffffff);
      border-left: 4px solid #667eea;
      border-radius: 5px;
    }
    .message-box h3 {
      margin-top: 0;
      color: #667eea;
      font-size: 18px;
    }
    .message-content {
      white-space: pre-wrap;
      margin: 0;
      color: #2c3e50;
      line-height: 1.8;
      font-size: 15px;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      text-align: center;
      color: #7f8c8d;
      font-size: 13px;
    }
    .reply-button {
      display: inline-block;
      margin-top: 15px;
      padding: 12px 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 New Contact Form Submission</h1>
    </div>
    
    <div class="info-section">
      <div class="info-row">
        <span class="label">👤 Full Name:</span>
        <span class="value">{{from_name}}</span>
      </div>
      
      <div class="info-row">
        <span class="label">📧 Email Address:</span>
        <span class="value">{{from_email}}</span>
      </div>
      
      <div class="info-row">
        <span class="label">📱 Phone Number:</span>
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
      <p class="message-content">{{message}}</p>
    </div>
    
    <div class="footer">
      <p>This email was sent from your portfolio contact form</p>
      <a href="mailto:{{from_email}}" class="reply-button">Reply to {{from_name}}</a>
      <p style="margin-top: 15px; font-size: 12px;">
        Reply directly to: <strong>{{from_email}}</strong>
      </p>
    </div>
  </div>
</body>
</html>
```

---

#### **Option 2: Plain Text Template (Simple)**

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

This email was sent from your portfolio website.
Reply to: {{from_email}}
```

---

## 🔍 **How to Verify Template Variables**

### **In EmailJS Dashboard:**

1. Go to: https://dashboard.emailjs.com/admin/templates/template_w5eh1y4
2. Click **"Test It"** button
3. Fill in test values for each variable:
   - `from_name`: Test User
   - `from_email`: test@example.com
   - `phone`: +880 1234567890
   - `service_type`: Full-Stack Web Development
   - `subject`: Test Subject
   - `message`: This is a test message
   - `to_email`: mdalabidsupto@gmail.com

4. Click **"Send Test"**
5. Check your email at `mdalabidsupto@gmail.com`

---

## ✅ **Checklist**

- [ ] Template ID is `template_w5eh1y4` (already set in code)
- [ ] Template uses `{{from_name}}` for Full Name
- [ ] Template uses `{{from_email}}` for Email
- [ ] Template uses `{{service_type}}` for Service Type
- [ ] Template uses `{{phone}}` for Phone Number
- [ ] Template uses `{{subject}}` for Subject
- [ ] Template uses `{{message}}` for Message
- [ ] Template tested with "Test It" button
- [ ] Test email received successfully

---

## 🚨 **Common Mistakes to Avoid**

❌ **WRONG Variable Names:**
```
{{name}}          ← Should be {{from_name}}
{{email}}         ← Should be {{from_email}}
{{service}}       ← Should be {{service_type}}
```

✅ **CORRECT Variable Names:**
```
{{from_name}}     ← Full Name
{{from_email}}    ← Email Address
{{service_type}}  ← Service Type
{{phone}}         ← Phone Number
{{subject}}       ← Subject
{{message}}       ← Message
```

---

## 🧪 **Test Your Form**

After setting up the template:

1. **Refresh your website** (Ctrl+F5)
2. **Fill out the contact form:**
   - Full Name: Your Name
   - Email: your@email.com
   - Phone: +880 1234567890
   - Service Type: Full-Stack Web Development
   - Subject: Test Form
   - Message: Testing the contact form

3. **Click "Send Message"**
4. **Check your email** at `mdalabidsupto@gmail.com`
5. **Verify all fields are present:**
   - ✅ Full Name appears
   - ✅ Email appears
   - ✅ Service Type appears
   - ✅ Phone appears
   - ✅ Subject appears
   - ✅ Message appears

---

## 📞 **If Fields Are Still Missing**

### **Check Browser Console:**
1. Press F12 to open Developer Tools
2. Go to "Console" tab
3. Submit the form
4. Look for "EmailJS Success!" message
5. Check what data was sent

### **Verify in EmailJS Dashboard:**
1. Go to: https://dashboard.emailjs.com/admin
2. Click "History" or "Logs"
3. Find your recent submission
4. Check what parameters were received

---

## 🎯 **Current Configuration**

```javascript
// Your form sends these parameters:
const templateParams = {
  from_name: name,           // Full Name field
  from_email: email,         // Email field
  phone: phone || 'Not provided',
  service_type: serviceText, // Service Type dropdown (text, not value)
  subject: subject,
  message: message,
  to_email: 'mdalabidsupto@gmail.com'
};
```

Your EmailJS template **MUST** use these exact variable names with double curly braces: `{{from_name}}`, `{{from_email}}`, `{{service_type}}`, etc.

---

**Last Updated:** 2025
**Template ID:** `template_w5eh1y4`
**Service ID:** `service_qo4rofm`
**Public Key:** `48J9Yj3KrrvXA0s2T`
**Recipient:** `mdalabidsupto@gmail.com`

---

## ✨ **Quick Fix**

If you're still not receiving the fields, the most common issue is:

**Your EmailJS template is using different variable names!**

Solution:
1. Copy the HTML or Plain Text template above
2. Go to https://dashboard.emailjs.com/admin/templates/template_w5eh1y4
3. Paste it into your template
4. Save
5. Test again

This will fix the issue! 🎉

