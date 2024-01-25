

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "(current notification)": "(\u043f\u043e\u0442\u043e\u0447\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f)",
    "(current version)": "(\u043f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0435\u0440\u0441\u0456\u044f)",
    "1 month ago": "\u0437\u0430 \u043c\u0456\u0441\u044f\u0446\u044c",
    "1 week ago": "\u0437\u0430 \u0442\u0438\u0436\u0434\u0435\u043d\u044c",
    "3 days ago": "\u0437\u0430 3 \u0434\u043d\u0456",
    "Active": "\u0410\u043a\u0442\u0438\u0432\u043d\u0438\u0439",
    "Add": "\u0414\u043e\u0434\u0430\u0442\u0438",
    "Add Admins": "\u0414\u043e\u0434\u0430\u0442\u0438 \u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0456\u0432",
    "Add admin": "\u0414\u043e\u0434\u0430\u0442\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430",
    "Add new notification": "\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f",
    "Add password protection": "\u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u0445\u0438\u0441\u0442 \u043f\u0430\u0440\u043e\u043b\u0435\u043c",
    "Add user": "\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",
    "Added": "\u0414\u043e\u0434\u0430\u043d\u043e",
    "Admin": "\u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440",
    "Admins": "\u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0438",
    "All": "\u0412\u0441\u0456",
    "All Groups": "\u0412\u0441\u0456 \u0433\u0440\u0443\u043f\u0438",
    "All Notifications": "\u0412\u0441\u0456 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f",
    "All Public Links": "\u0412\u0441\u0456 \u043f\u0443\u0431\u043b\u0456\u0447\u043d\u0456 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",
    "All file types": "\u0423\u0441\u0456 \u0442\u0438\u043f\u0438 \u0444\u0430\u0439\u043b\u0456\u0432",
    "Are you sure you want to delete %s ?": "\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 %s ?",
    "Are you sure you want to restore this library?": "\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 \u0446\u044e \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0443?",
    "Audio": "\u0410\u0443\u0434\u0456\u043e",
    "Avatar": "\u0410\u0432\u0430\u0442\u0430\u0440",
    "Can not copy directory %(src)s to its subdirectory %(des)s": "\u041d\u0435 \u043c\u043e\u043b\u0438\u0432\u043e \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u043a\u043e\u043f\u0456\u044e \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 %(src)s \u0434\u043e \u0441\u0432\u043e\u0433\u043e \u043f\u0456\u0434\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 %(des)s",
    "Can not move directory %(src)s to its subdirectory %(des)s": "\u041d\u0435 \u043c\u043e\u0436\u043b\u0438\u0432\u043e \u043f\u0435\u0440\u0435\u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 %(src)s \u0434\u043e \u0441\u0432\u043e\u0433\u043e \u043f\u0456\u0434\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 %(des)s",
    "Cancel": "\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
    "Cancel All": "\u0412\u0438\u0445\u0456\u0434",
    "Change": "\u0417\u043c\u0456\u043d\u0438\u0442\u0438",
    "Change Password": "\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",
    "Clean": "\u041f\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0438",
    "Clear": "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438",
    "Clear files in trash and history\uff1a": "\u041f\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0444\u0430\u0439\u043b\u0438 \u0437\u0456 \u0421\u043c\u0456\u0442\u0442\u044f \u0442\u0430 \u0456\u0441\u0442\u043e\u0440\u0456\u0457",
    "Close": "\u0417\u0430\u043a\u0440\u0438\u0442\u0438",
    "Copy": "\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438",
    "Count": "Count",
    "Create": "\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438",
    "Created At": "\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u043d\u0430",
    "Created library": "\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u0430 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0430",
    "Creator": "\u0410\u0432\u0442\u043e\u0440",
    "Current Path: ": "\u041f\u043e\u0442\u043e\u0447\u043d\u0438\u0439 \u0448\u043b\u044f\u0445: ",
    "Current path: ": "\u041f\u043e\u0442\u043e\u0447\u043d\u0438\u0439 \u0448\u043b\u044f\u0445: ",
    "Custom file types": "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0456\u0432",
    "Database": "\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u0438\u0445",
    "Default": "\u0417\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c",
    "Delete": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",
    "Delete Account": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",
    "Delete Group": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0433\u0440\u0443\u043f\u0443",
    "Delete Library": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0443",
    "Delete Member": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0430",
    "Delete Notification": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f",
    "Delete Time": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0447\u0430\u0441",
    "Delete User": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",
    "Deleted": "\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043e",
    "Deleted directories": "\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u0456 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438",
    "Deleted files": "\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u0456 \u0444\u0430\u0439\u043b\u0438",
    "Description": "\u041e\u043f\u0438\u0441",
    "Description is required": "\u041f\u043e\u0442\u0440\u0456\u0431\u0435\u043d \u043e\u043f\u0438\u0441 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438",
    "Detail": "\u041f\u043e\u0434\u0440\u043e\u0431\u0438\u0446\u0456",
    "Details": "\u0414\u0435\u0442\u0430\u043b\u0456",
    "Device Name": "\u041d\u0430\u0437\u0432\u0430 \u043f\u0440\u0438\u043b\u0430\u0434\u0443",
    "Directory": "\u041a\u0430\u0442\u0430\u043b\u043e\u0433",
    "Document convertion failed.": "\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0456\u0457.",
    "Documents": "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438",
    "Don't keep history": "\u041d\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u0456\u0441\u0442\u043e\u0440\u0456\u044e",
    "Download": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438",
    "Edit": "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",
    "Edit succeeded": "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0443\u0441\u043f\u0456\u0448\u043d\u0435.",
    "Email": "Email",
    "Encrypt": "\u0428\u0438\u0444\u0440\u0443\u0432\u0430\u0442\u0438",
    "Error": "\u041f\u043e\u043c\u0438\u043b\u043a\u0430",
    "Exit System Admin": "\u0412\u0438\u0439\u0442\u0438 \u0437 \u043a\u043e\u043d\u0441\u043e\u043b\u0456 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430",
    "Failed": "\u041d\u0435\u0432\u0434\u0430\u043b\u043e",
    "Failed. Please check the network.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043c\u0435\u0440\u0435\u0436\u0435\u0432\u0435 \u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f.",
    "File": "\u0424\u0430\u0439\u043b",
    "File Uploading...": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0443...",
    "File download is disabled: the share link traffic of owner is used up.": "File download is disabled: the share link traffic of owner is used up.\n\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0443 \u0432\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043e:  \u0442\u0440\u0430\u0444\u0456\u043a \u0434\u043b\u044f \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u0443 \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u043e\u043c \u0432\u0438\u0447\u0435\u0440\u043f\u0430\u043d\u043e.",
    "Files": "\u0424\u0430\u0439\u043b\u0438",
    "Folder": "\u041a\u0430\u0442\u0430\u043b\u043e\u0433",
    "Folder Permission": "\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u043d\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433",
    "Groups": "\u0413\u0440\u0443\u043f\u0438",
    "Guest": "\u0413\u043e\u0441\u0442\u044c",
    "Help": "\u0414\u043e\u043f\u043e\u043c\u043e\u0433\u0430",
    "History": "\u0406\u0441\u0442\u043e\u0440\u0456\u044f",
    "IP": "IP",
    "Images": "\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f",
    "Import users": "\u0406\u043c\u043f\u043e\u0440\u0442 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432",
    "In all libraries": "\u0423 \u0432\u0441\u0456\u0445 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0430\u0445",
    "Inactive": "\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u0438\u0439",
    "Info": "\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f",
    "Input file extensions here, separate with ','": "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432, \u0440\u043e\u0437\u0434\u0456\u043b\u044f\u044e\u0447\u0438 \u0457\u0445 ','",
    "Internal Server Error": "\u0412\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
    "Invalid destination path": "\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u0448\u043b\u044f\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",
    "It is required.": "\u041f\u043e\u0442\u0440\u0456\u0431\u0435\u043d Email.",
    "Keep full history": "\u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u043f\u043e\u0432\u043d\u0443 \u0456\u0441\u0442\u043e\u0440\u0456\u044e",
    "LDAP": "LDAP",
    "Language": "\u041c\u043e\u0432\u0430",
    "Language Setting": "\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043c\u043e\u0432\u0438",
    "Last Access": "\u041e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0434\u043e\u0441\u0442\u0443\u043f",
    "Last Update": "\u041e\u0441\u0442\u0430\u043d\u043d\u0454 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",
    "Leave Share": "\u0417\u0430\u043b\u0438\u0448\u0438\u0442\u0438 \u0441\u043f\u0456\u043b\u044c\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f",
    "Libraries": "\u0411\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438",
    "Library": "\u0411\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0430",
    "Mark all read": "\u0412\u0456\u0434\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u0432\u0441\u0456 \u0447\u0438\u0442\u0430\u0442\u0438",
    "Members": "\u0423\u0447\u0430\u0441\u043d\u0438\u043a\u0438",
    "Message": "\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f",
    "Message (optional):": "\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",
    "Modification Details": "\u0414\u0435\u0442\u0430\u043b\u0456 \u043c\u043e\u0434\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0457",
    "Modified": "\u041c\u043e\u0434\u0438\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u043e",
    "Modified files": "\u041c\u043e\u0434\u0438\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u0456 \u0444\u0430\u0439\u043b\u0438",
    "Modifier": "\u041c\u043e\u0434\u0438\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u043e",
    "Month:": "\u041c\u0456\u0441\u044f\u0446\u044c:",
    "More": "\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435",
    "More operations": "\u0411\u0456\u043b\u044c\u0448\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0439",
    "Move": "\u041f\u0435\u0440\u0435\u043c\u0456\u0441\u0442\u0438\u0442\u0438",
    "Name": "\u0418\u043c'\u044f",
    "Name is required": "\u041f\u043e\u0442\u0440\u0456\u0431\u0435\u043d\u0435 \u0441\u0442\u0430\u0440\u0435 \u0456\u043c'\u044f",
    "Name is required.": "\u041f\u043e\u0442\u0440\u0456\u0431\u0435\u043d\u0435 \u0441\u0442\u0430\u0440\u0435 \u0456\u043c'\u044f",
    "Name(optional)": "\u0406\u043c'\u044f (\u043d\u0435\u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e)",
    "New File": "\u041d\u043e\u0432\u0438\u0439 \u0444\u0430\u0439\u043b",
    "New Group": "\u041d\u043e\u0432\u0430 \u0433\u0440\u0443\u043f\u0430",
    "New Library": "\u041d\u043e\u0432\u0430 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0430",
    "New Password Again": "\u041f\u043e\u0432\u0442\u043e\u0440 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u0430\u0440\u043e\u043b\u044e",
    "New directories": "\u041d\u043e\u0432\u0456 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438",
    "New files": "\u041d\u043e\u0432\u0438\u0439 \u0444\u0430\u0439\u043b",
    "New password is too short": "\u041d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u0443\u0436\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439",
    "New passwords don't match": "\u041d\u043e\u0432\u0456 \u043f\u0430\u0440\u043e\u043b\u0456 \u043d\u0435 \u0441\u043f\u0456\u0432\u043f\u0430\u0434\u0430\u044e\u0442\u044c",
    "Next": "\u0412\u043f\u0435\u0440\u0435\u0434",
    "No": "\u041d\u0456",
    "No members": "\u041d\u0435 \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0438",
    "No result": "\u041d\u0435\u043c\u0430\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0443",
    "Notification Detail": "\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0434\u043e\u043a\u043b\u0430\u0434\u043d\u043e",
    "Notifications": "\u0421\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f",
    "Number of groups": "\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0433\u0440\u0443\u043f",
    "Number of members": "\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0456\u0432",
    "Old Password": "\u0421\u0442\u0430\u0440\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
    "Only keep a period of history:": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043b\u0438\u0448\u0435 \u043f\u0435\u0440\u0456\u043e\u0434 \u0456\u0441\u0442\u043e\u0440\u0456\u0457: ",
    "Operation": "\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u044f",
    "Operation succeeded.": "\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u0443\u0441\u043f\u0456\u0448\u043d\u043e.",
    "Operations": "\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u0457",
    "Organization": "\u0421\u043f\u0456\u043b\u044c\u043d\u043e\u0442\u0438",
    "Organizations": "\u0421\u043f\u0456\u043b\u044c\u043d\u043e\u0442\u0438",
    "Owner": "\u0412\u043b\u0430\u0441\u043d\u0438\u043a",
    "Password": "\u041f\u0430\u0440\u043e\u043b\u044c",
    "Password again": "\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",
    "Password is too short": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u0443\u0436\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439",
    "Password:": "\u041f\u0430\u0440\u043e\u043b\u044c: ",
    "Passwords don't match": "\u041f\u0430\u0440\u043e\u043b\u0456 \u043d\u0435 \u0437\u0431\u0456\u0433\u0430\u044e\u0442\u044c\u0441\u044f",
    "Permission": "\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0443",
    "Permission denied": "\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u0431\u043e\u0440\u043e\u043d\u0435\u043d\u043e",
    "Platform": "\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430",
    "Please check the network.": "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043c\u0435\u0440\u0435\u0436\u0435\u0432\u0435 \u0437\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f.",
    "Please enter 1 or more character": "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c 1 \u0430\u0431\u043e \u0431\u0456\u043b\u044c\u0448\u0435 \u043b\u0456\u0442\u0435\u0440",
    "Please enter days": "\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u043d\u0456\u0432",
    "Please enter password": "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",
    "Please enter the new password again": "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u043d\u043e\u0432\u0443 \u043d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c ",
    "Please enter the old password": "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0442\u0430\u0440\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
    "Please enter the password again": "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",
    "Please input at least an email.": "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0440\u0438\u043d\u0430\u0439\u043c\u043d\u0456, email.",
    "Previous": "\u041d\u0430\u0437\u0430\u0434",
    "Profile": "\u041f\u0440\u043e\u0444\u0456\u043b\u044c",
    "Profile Setting": "\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0444\u0456\u043b\u044e",
    "Read-Only": "\u0422\u0456\u043b\u044c\u043a\u0438 \u0434\u043b\u044f \u0447\u0438\u0442\u0430\u043d\u043d\u044f",
    "Read-Write": "\u0427\u0438\u0442\u0430\u043d\u043d\u044f+\u0417\u0430\u043f\u0438\u0441",
    "Really want to delete your account?": "\u0414\u0456\u0439\u0441\u043d\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 %s ?",
    "Remove": "\u0412\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u043e",
    "Rename": "\u041f\u0435\u0440\u0435\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u0442\u0438",
    "Rename File": "\u041f\u0435\u0440\u0435\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u0442\u0438 \u0444\u0430\u0439\u043b",
    "Renamed or Moved files": "\u043f\u0435\u0440\u0435\u0439\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0456 \u0430\u0431\u043e \u043f\u0435\u0440\u0435\u043c\u0456\u0449\u0435\u043d\u0456 \u0444\u0430\u0439\u043b\u0438",
    "Reset Password": "\u0421\u043a\u0438\u0434\u0430\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044f",
    "Restore": "\u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438",
    "Restore Library": "\u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0443",
    "Result": "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
    "Revoke Admin": "\u0412\u0456\u0434\u043a\u043b\u0438\u043a\u0430\u0442\u0438 \u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430",
    "Role": "\u0420\u043e\u043b\u044c",
    "Saving...": "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f...",
    "Seafile": "Seafile",
    "Search": "\u041f\u043e\u0448\u0443\u043a",
    "Search files in this library": "\u041f\u043e\u0448\u0443\u043a \u0444\u0430\u0439\u043b\u0456\u0432 \u0432 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u0446\u0456",
    "Send": "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438",
    "Send to:": "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438: ",
    "Sending...": "\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u0430 ...",
    "Server Version: ": "\u0412\u0435\u0440\u0441\u0456\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0443: ",
    "Set Admin": "\u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430",
    "Set Quota": "\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 \u043a\u0432\u043e\u0442\u0443",
    "Set to current": "\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 \u044f\u043a \u043f\u043e\u0442\u043e\u0447\u043d\u0435",
    "Settings": "\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f",
    "Share": "\u0414\u043e\u0441\u0442\u0443\u043f",
    "Share Admin": "\u0421\u043f\u0456\u043b\u044c\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f",
    "Share From": "\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0432\u0456\u0434",
    "Share Link": "\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u043e\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",
    "Share To": "\u0421\u043f\u0456\u043b\u044c\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043b\u044f",
    "Shared By": "\u041d\u0430\u0434\u0430\u043d\u043e \u0432 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f ",
    "Shared Links": "\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0441\u043f\u0456\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0443",
    "Size": "\u0420\u043e\u0437\u043c\u0456\u0440",
    "Space Used": "\u0414\u0438\u0441\u043a\u043e\u0432\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u0456\u0440, \u0449\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f",
    "Star": "\u041f\u043e\u0437\u043d\u0430\u0447\u0438\u0442\u0438",
    "Status": "\u0421\u0442\u0430\u0442\u0443\u0441",
    "Submit": "\u0413\u043e\u0442\u043e\u0432\u043e",
    "Successfully copied %(name)s and %(amount)s other items.": "\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0441\u043a\u043e\u043f\u0456\u0439\u043e\u0432\u0430\u043d\u043e %(name)s \u0442\u0430 %(amount)s \u0456\u043d\u0448\u0438\u0445 \u043f\u043e\u0437\u0438\u0446\u0456\u0439.",
    "Successfully copied %(name)s.": "\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0441\u043a\u043e\u043f\u0456\u0439\u043e\u0432\u0430\u043d\u043e %(name)s.",
    "Successfully moved %(name)s and %(amount)s other items.": "\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u043f\u0435\u0440\u0435\u043c\u0456\u0449\u0435\u043d\u043e %(name)s \u0442\u0430 %(amount)s \u0456\u043d\u0448\u0438\u0445 \u043f\u043e\u0437\u0438\u0446\u0456\u0439.",
    "Successfully moved %(name)s.": "\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u043f\u0435\u0440\u0435\u043c\u0456\u0449\u0435\u043d\u043e %(name)s.",
    "Successfully reset password to %(passwd)s for user %(user)s.": "\u041f\u0430\u0440\u043e\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u043c\u0456\u043d\u0435\u043d\u043e \u043d\u0430 %(passwd)s \u0434\u043b\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 %(user)s.",
    "Successfully revoke the admin permission of %s": "\u041f\u0440\u0430\u0432\u0430 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 %s \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0456\u0434\u043a\u043b\u0438\u043a\u0430\u043d\u0456",
    "Successfully set %s as admin.": "%s \u043d\u0430\u0434\u0430\u043d\u043e \u043f\u0440\u0430\u0432\u0430 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430.",
    "Sync": "\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044f",
    "System": "\u0421\u0438\u0441\u0442\u0435\u043c\u0430",
    "System Admin": "\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0438\u0439 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440",
    "Text files": "\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u0456 \u0444\u0430\u0439\u043b\u0438",
    "This operation will not be reverted. Please think twice!": "\u0426\u044e \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u044e \u043d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u0441\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u043e\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u0434\u0432\u0456\u0447\u0456!",
    "Time": "\u0427\u0430\u0441",
    "Tip: 0 means default limit": "\u0412\u0440\u0430\u0445\u0443\u0439\u0442\u0435: 0 - \u0431\u0435\u0437 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u044c (\u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c)",
    "Tip: a snapshot will be generated after modification, which records the library state after the modification.": "\u0412\u0440\u0430\u0445\u0443\u0439\u0442\u0435: \u0437\u043d\u0456\u043c\u043e\u043a \u0431\u0443\u0434\u0435 \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0442\u0438\u0441\u044c \u043f\u0456\u0441\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0457 \u043c\u043e\u0434\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0457 \u0434\u0430\u043d\u0438\u0445, \u0444\u0456\u043a\u0441\u0443\u044e\u0447\u0438 \u0441\u0442\u0430\u043d \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438 \u043f\u0435\u0440\u0435\u0434 \u0446\u0456\u0454\u044e \u043c\u043e\u0434\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0454\u044e.",
    "Traffic": "\u0422\u0440\u0430\u0444\u0456\u043a",
    "Transfer": "\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u043d\u044f",
    "Transfer Library": "\u041f\u0435\u0440\u0435\u043d\u043e\u0441 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438",
    "Trash": "\u041a\u043e\u0448\u0438\u043a",
    "Type": "\u0422\u0438\u043f",
    "Unlink": "\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e ",
    "Unshare": "\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0441\u043f\u0456\u043b\u044c\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f",
    "Unstar": "\u0417\u043d\u044f\u0442\u0438 \u0432\u0456\u0434\u043c\u0456\u0442\u043a\u0443",
    "Update": "\u041e\u043d\u043e\u0432\u0438\u0442\u0438",
    "Upload": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438",
    "Upload Files": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043b",
    "Upload Link": "\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0437 \u043f\u0440\u0430\u0432\u0430\u043c\u0438 \u0437\u0430\u043f\u0438\u0441\u0443",
    "Upload Links": "\u0417 \u043f\u0440\u0430\u0432\u043e\u043c \u0437\u0430\u043f\u0438\u0441\u0443",
    "User": "\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447",
    "User Permission": "\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",
    "Users": "\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430(\u0456\u0432)",
    "Video": "\u0412\u0456\u0434\u0435\u043e",
    "View": "\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434",
    "Visits": "\u0412\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u043d\u043d\u044f",
    "Yes": "\u0422\u0430\u043a",
    "You can also add a user as a guest, who will not be allowed to create libraries and groups.": "\u0412\u0438 \u0442\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0432 \u044f\u043a\u043e\u0441\u0442\u0456 \u0433\u043e\u0441\u0442\u044f, \u044f\u043a\u043e\u043c\u0443 \u043d\u0435 \u0431\u0443\u0434\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u043e \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0442\u0438 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438 \u0442\u0430 \u0433\u0440\u0443\u043f\u0438.",
    "all": "\u0432\u0441\u0435",
    "days": "\u0434\u043d\u0456\u0432",
    "icon": "\u0456\u043a\u043e\u043d\u043a\u0430",
    "name": "\u0456\u043c'\u044f",
    "shared by:": "\u043d\u0430\u0434\u0430\u043d\u043e:",
    "starred": "\u041f\u043e\u0437\u043d\u0430\u0447\u0438\u0442\u0438",
    "to": "\u0434\u043b\u044f",
    "unstarred": "\u0417\u043d\u044f\u0442\u0438 \u0432\u0456\u0434\u043c\u0456\u0442\u043a\u0443",
    "you can also press \u2190 ": "\u0412\u0438 \u0442\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0442\u0438\u0441\u043d\u0443\u0442\u0438 \u2190 "
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "d E Y \u0440. H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d %B %Y %H:%M:%S",
      "%d %B %Y %H:%M:%S.%f",
      "%d %B %Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "d E Y \u0440.",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d %B %Y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "d F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};

