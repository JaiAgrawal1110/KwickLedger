// ================================================================
// KwickLedger – Contact Form → Google Sheets
// ================================================================
// SETUP INSTRUCTIONS:
// 1. Go to script.google.com → New Project
// 2. Paste this entire file
// 3. Click "Deploy" → "New Deployment" → Type: Web App
// 4. Set "Execute as" = Me, "Who has access" = Anyone
// 5. Click Deploy → Copy the Web App URL
// 6. In index.html, replace YOUR_GOOGLE_APPS_SCRIPT_URL_HERE
//    with the copied URL
// ================================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // ── Open or create the spreadsheet ──
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Leads');

    if (!sheet) {
      sheet = ss.insertSheet('Leads');
      // Add header row
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Company / Firm',
        'Email',
        'Country',
        'Service Interested In',
        'Message'
      ]);

      // Style the header row
      var header = sheet.getRange(1, 1, 1, 7);
      header.setFontWeight('bold');
      header.setBackground('#0B1D35');
      header.setFontColor('#C9A84C');
    }

    // ── Append the new lead ──
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name     || '',
      data.company  || '',
      data.email    || '',
      data.country  || '',
      data.service  || '',
      data.message  || ''
    ]);

    // ── Optional: send email notification ──
    // Uncomment and update the email below to get notified on every submission
    /*
    MailApp.sendEmail({
      to: 'tushar.agarwal@teamkwickledger.com',
      subject: '🔔 New KwickLedger Enquiry – ' + (data.name || 'Unknown'),
      body: [
        'New contact form submission:',
        '',
        'Name:      ' + data.name,
        'Company:   ' + data.company,
        'Email:     ' + data.email,
        'Country:   ' + data.country,
        'Service:   ' + data.service,
        'Message:   ' + data.message,
        '',
        'Submitted: ' + data.timestamp
      ].join('\n')
    });
    */

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── GET handler (for testing the URL is live) ──
function doGet(e) {
  return ContentService
    .createTextOutput('KwickLedger contact endpoint is live.')
    .setMimeType(ContentService.MimeType.TEXT);
}
