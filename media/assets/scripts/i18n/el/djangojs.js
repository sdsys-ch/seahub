

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n != 1);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "(current notification)": "(\u03c4\u03c9\u03c1\u03b9\u03bd\u03ae \u03c5\u03c0\u03b5\u03bd\u03b8\u03cd\u03bc\u03b9\u03c3\u03b7)",
    "(current version)": "(\u03c4\u03c9\u03c1\u03b9\u03bd\u03ae \u03ad\u03ba\u03b4\u03bf\u03c3\u03b7)",
    "About Us": "\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03b5\u03bc\u03ac\u03c2",
    "Activated": "\u0395\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03ae\u03b8\u03b7\u03ba\u03b5",
    "Active Users": "\u0395\u03bd\u03b5\u03c1\u03b3\u03bf\u03af \u03c7\u03c1\u03ae\u03c3\u03c4\u03b5\u03c2",
    "Activities": "\u0394\u03c1\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2",
    "Add": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7",
    "Add Admins": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b4\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03ce\u03bd",
    "Add Library": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7\u03c2",
    "Add User": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7",
    "Add admin": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b4\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03ae",
    "Add auto expiration": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b7\u03c2 \u03bb\u03ae\u03be\u03b7\u03c2",
    "Add new notification": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03bd\u03ad\u03b1\u03c2 \u03c5\u03c0\u03b5\u03bd\u03b8\u03cd\u03bc\u03b9\u03c3\u03b7\u03c2",
    "Added": "\u03a0\u03c1\u03bf\u03c3\u03c4\u03ad\u03b8\u03b7\u03ba\u03b5",
    "Added user {user}": "\u0394\u03b9\u03b1\u03b3\u03c1\u03ac\u03c6\u03b7\u03ba\u03b5 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7\u03c2 {user}",
    "Admin": "\u0394\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03ae\u03c2",
    "Admins": "\u0394\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03ad\u03c2",
    "All": "\u038c\u03bb\u03b1",
    "All Groups": "\u038c\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2",
    "All Notifications": "\u038c\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03c5\u03c0\u03b5\u03bd\u03b8\u03c5\u03bc\u03af\u03c3\u03b5\u03b9\u03c2",
    "Anonymous User": "\u0391\u03bd\u03ce\u03bd\u03c5\u03bc\u03bf\u03c2 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7\u03c2",
    "Are you sure you want to delete %s ?": "\u0395\u03af\u03c3\u03c4\u03b5 \u03c3\u03af\u03b3\u03bf\u03c5\u03c1\u03bf\u03b9 \u03c0\u03c9\u03c2 \u03b8\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03c8\u03b5\u03c4\u03b5 \u03c4\u03bf\u03bd/\u03c4\u03b7\u03bd %s ?",
    "Are you sure you want to unlink this device?": "\u0395\u03af\u03c3\u03c4\u03b5 \u03c3\u03af\u03b3\u03bf\u03c5\u03c1\u03bf\u03b9 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7 \u03c4\u03b7\u03c2 \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ae\u03c2;",
    "Avatar": "Avatar",
    "Avatar:": "Avatar:",
    "Cancel": "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
    "Cancel All": "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u03cc\u03bb\u03c9\u03bd",
    "Change": "\u0391\u03bb\u03bb\u03b1\u03b3\u03ae",
    "Change Password of Library {placeholder}": "\u0391\u03bb\u03bb\u03b1\u03b3\u03ae \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03c4\u03b7\u03c2 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7\u03c2 {placeholder}",
    "Clear": "\u0391\u03c0\u03b1\u03bb\u03bf\u03b9\u03c6\u03ae",
    "Clear Trash": "\u0395\u03ba\u03ba\u03b1\u03b8\u03ac\u03c1\u03b9\u03c3\u03b7 \u03ba\u03ac\u03b4\u03bf\u03c5 \u03b1\u03c0\u03bf\u03c1\u03c1\u03b9\u03bc\u03ac\u03c4\u03c9\u03bd",
    "Close": "\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf",
    "Contact Email:": "E-mail \u03b5\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1\u03c2",
    "Copy": "\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
    "Copy selected item(s) to:": "\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5(\u03c9\u03bd) \u03c3\u03b5:",
    "Create": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1",
    "Create Group": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2",
    "Created group {group_name}": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03bf\u03bc\u03ac\u03b4\u03b1 {group_name}",
    "Created library": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7",
    "Current Library": "\u03a4\u03c9\u03c1\u03b9\u03bd\u03ae \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7",
    "Current path: ": "\u03a4\u03c9\u03c1\u03b9\u03bd\u03ae \u03b4\u03b9\u03b1\u03b4\u03c1\u03bf\u03bc\u03ae:",
    "Database": "\u0392\u03ac\u03c3\u03b7 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd",
    "Date": "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1",
    "Delete": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",
    "Delete Account": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
    "Delete Group": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2",
    "Delete Library": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7\u03c2",
    "Delete Member": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03bc\u03ad\u03bb\u03bf\u03c5\u03c2",
    "Delete Notification": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03c5\u03c0\u03b5\u03bd\u03b8\u03cd\u03bc\u03b9\u03c3\u03b7\u03c2",
    "Delete Time": "\u03a7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03b4\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2",
    "Delete User": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7",
    "Delete files from this device the next time it comes online.": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03b1\u03c1\u03c7\u03b5\u03af\u03c9\u03bd \u03b1\u03c0\u03cc \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7 \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ae \u03c4\u03b7\u03bd \u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03c6\u03bf\u03c1\u03ac \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03b5 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7.",
    "Deleted": "\u0394\u03b9\u03b1\u03b3\u03c1\u03ac\u03c6\u03b7\u03ba\u03b5",
    "Deleted directories": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03bc\u03bc\u03ad\u03bd\u03bf\u03b9 \u03ba\u03b1\u03c4\u03ac\u03bb\u03bf\u03b3\u03bf\u03b9",
    "Deleted files": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03bc\u03bc\u03ad\u03bd\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1",
    "Deleted group {group_name}": "\u0394\u03b9\u03b1\u03b3\u03c1\u03ac\u03c6\u03b7\u03ba\u03b5 \u03bf\u03bc\u03ac\u03b4\u03b1 {group_name}",
    "Deleted library {library_name}": "\u0394\u03b9\u03b1\u03b3\u03c1\u03ac\u03c6\u03b7\u03ba\u03b5 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7 {library_name}",
    "Deleted user {user}": "\u0394\u03b9\u03b1\u03b3\u03c1\u03ac\u03c6\u03b7\u03ba\u03b5 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7\u03c2 {user}",
    "Description": "\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
    "Details": "\u039b\u03b5\u03c0\u03c4\u03bf\u03bc\u03ad\u03c1\u03b5\u03b9\u03b5\u03c2",
    "Device Name": "\u038c\u03bd\u03bf\u03bc\u03b1 \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ae\u03c2",
    "Devices": "\u03a3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ad\u03c2",
    "Directory": "\u03a6\u03ac\u03ba\u03b5\u03bb\u03bf\u03c2",
    "Documents": "\u0388\u03b3\u03b3\u03c1\u03b1\u03c6\u03b1",
    "Download": "\u039b\u03ae\u03c8\u03b7",
    "Edit": "\u03a4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",
    "Edit succeeded": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03b7\u03bc\u03ad\u03bd\u03b7 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",
    "Email": "Email",
    "Encrypted library": "\u039a\u03c1\u03c5\u03c0\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03b7\u03bc\u03ad\u03bd\u03b7 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7",
    "Error": "\u03a3\u03c6\u03ac\u03bb\u03bc\u03b1",
    "Errors": "\u03a3\u03c6\u03ac\u03bb\u03bc\u03b1\u03c4\u03b1",
    "Exit System Admin": "\u0388\u03be\u03bf\u03b4\u03bf\u03c2 \u0394\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03ae \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2",
    "Expiration": "\u039b\u03ae\u03be\u03b7",
    "Expired": "\u0388\u03bb\u03b7\u03be\u03b5",
    "Export Excel": "\u0395\u03be\u03b1\u03b3\u03c9\u03b3\u03ae Excel",
    "Failed. Please check the network.": "\u0391\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5. \u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03bb\u03ad\u03b3\u03be\u03c4\u03b5 \u03c4\u03b7 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03ae \u03c3\u03b1\u03c2 \u03c3\u03c4\u03bf \u03b4\u03af\u03ba\u03c4\u03c5\u03bf.",
    "Favorites": "\u0391\u03b3\u03b1\u03c0\u03b7\u03bc\u03ad\u03bd\u03b1",
    "File": "\u0391\u03c1\u03c7\u03b5\u03af\u03bf",
    "File Upload": "\u039c\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5",
    "File Uploading...": "\u039c\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5...",
    "Files": "\u0391\u03c1\u03c7\u03b5\u03af\u03b1",
    "Folders": "\u03a6\u03ac\u03ba\u03b5\u03bb\u03bf\u03b9",
    "Group": "\u039f\u03bc\u03ac\u03b4\u03b1",
    "Groups": "\u039f\u03bc\u03ac\u03b4\u03b5\u03c2",
    "Help": "\u0392\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1",
    "Hide": "\u0391\u03c0\u03cc\u03ba\u03c1\u03c5\u03c8\u03b7",
    "History": "\u0399\u03c3\u03c4\u03bf\u03c1\u03b9\u03ba\u03cc",
    "IP": "IP",
    "Info": "\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2",
    "Institutions": "\u0399\u03bd\u03c3\u03c4\u03b9\u03c4\u03bf\u03cd\u03c4\u03b1",
    "Internal Server Error": "\u03a0\u03c1\u03cc\u03b2\u03bb\u03b7\u03bc\u03b1 \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae",
    "Invalid destination path": "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7 \u03b4\u03b9\u03b1\u03b4\u03c1\u03bf\u03bc\u03ae \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd",
    "It is required.": "\u0391\u03c0\u03b1\u03b9\u03c4\u03b5\u03af\u03c4\u03b1\u03b9.",
    "LDAP": "LDAP",
    "Language": "\u0393\u03bb\u03ce\u03c3\u03c3\u03b1",
    "Language Setting": "\u03a1\u03cd\u03b8\u03bc\u03b9\u03c3\u03b7 \u03b3\u03bb\u03ce\u03c3\u03c3\u03b1\u03c2",
    "Last Access": "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "Last Update": "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1 \u03c4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",
    "Leave Share": "\u0391\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7 \u03b1\u03c0\u03cc \u03ba\u03bf\u03b9\u03bd\u03ae \u03c7\u03c1\u03ae\u03c3\u03b7",
    "Libraries": "\u0392\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b5\u03c2",
    "Library": "\u0392\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7",
    "Linked Devices": "\u03a3\u03c5\u03bd\u03b4\u03b5\u03b4\u03b5\u03bc\u03ad\u03bd\u03b5\u03c2 \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ad\u03c2",
    "Links": "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf\u03b9",
    "Log out": "\u0391\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "Mark all read": "\u03a3\u03b7\u03bc\u03b5\u03af\u03c9\u03c3\u03b7 \u03cc\u03bb\u03c9\u03bd \u03c9\u03c2 \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03bc\u03ad\u03bd\u03c9\u03bd",
    "Member": "\u039c\u03ad\u03bb\u03bf\u03c2",
    "Members": "\u039c\u03ad\u03bb\u03b7",
    "Message": "\u039c\u03ae\u03bd\u03c5\u03bc\u03b1",
    "Modified": "\u03a4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03b9\u03ae\u03b8\u03b7\u03ba\u03b5",
    "Modified files": "\u03a4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1",
    "Modifier": "\u03a4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03b9\u03b7\u03c4\u03ae\u03c2",
    "Month:": "\u039c\u03ae\u03bd\u03b1\u03c2:",
    "More": "\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1",
    "Move": "\u039c\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7",
    "My Groups": "\u039f\u03b9 \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2 \u03bc\u03bf\u03c5",
    "Name": "\u038c\u03bd\u03bf\u03bc\u03b1",
    "Name is required": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03b1\u03c1\u03b1\u03af\u03c4\u03b7\u03c4\u03bf",
    "Name is required.": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03b1\u03c1\u03b1\u03af\u03c4\u03b7\u03c4\u03bf.",
    "Name should not include '/'.": "To \u03cc\u03bd\u03bf\u03bc\u03b1 \u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 '/'.",
    "Name(optional)": "\u038c\u03bd\u03bf\u03bc\u03b1(\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03ac)",
    "New Excel File": "\u039d\u03ad\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf Excel",
    "New File": "\u039d\u03ad\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf",
    "New Folder": "\u039d\u03ad\u03bf\u03c2 \u03c6\u03ac\u03ba\u03b5\u03bb\u03bf\u03c2",
    "New Group": "\u039d\u03ad\u03b1 \u03bf\u03bc\u03ac\u03b4\u03b1",
    "New Library": "\u039d\u03ad\u03b1 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7",
    "New Markdown File": "\u039d\u03ad\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf Markdown",
    "New PowerPoint File": "\u039d\u03ad\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf PowerPoint",
    "New Word File": "\u039d\u03ad\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf Word",
    "New directories": "\u039d\u03ad\u03bf\u03b9 \u03ba\u03b1\u03c4\u03ac\u03bb\u03bf\u03b3\u03bf\u03b9",
    "New files": "\u039d\u03ad\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1",
    "New password is too short": "\u03a4\u03bf \u03bd\u03ad\u03bf \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc",
    "New passwords don't match": "\u03a4\u03b1 \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03ac \u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03bf\u03c5\u03bd",
    "Next": "\u0395\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf",
    "None": "\u039a\u03b1\u03bc\u03af\u03b1",
    "Notification Detail": "\u039b\u03b5\u03c0\u03c4\u03bf\u03bc\u03ad\u03c1\u03b5\u03b9\u03b5\u03c2 \u03a5\u03c0\u03b5\u03bd\u03b8\u03cd\u03bc\u03b9\u03c3\u03b7\u03c2",
    "Notifications": "\u0395\u03b9\u03b4\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9\u03c2",
    "Operation": "\u039b\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1",
    "Operation succeeded.": "\u0397 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03ae\u03c4\u03b1\u03bd \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2.",
    "Operations": "\u0395\u03c1\u03b3\u03b1\u03c3\u03af\u03b5\u03c2",
    "Organization": "\u039f\u03c1\u03b3\u03b1\u03bd\u03b9\u03c3\u03bc\u03cc\u03c2",
    "Organizations": "\u039f\u03c1\u03b3\u03b1\u03bd\u03b9\u03c3\u03bc\u03bf\u03af",
    "Other Libraries": "\u0386\u03bb\u03bb\u03b5\u03c2 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b5\u03c2",
    "Owner": "\u0399\u03b4\u03b9\u03bf\u03ba\u03c4\u03ae\u03c4\u03b7\u03c2",
    "Packaging...": "\u03a0\u03b1\u03ba\u03b5\u03c4\u03ac\u03c1\u03b9\u03c3\u03bc\u03b1...",
    "Password": "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2",
    "Password is too short": "\u03a4\u03bf \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc",
    "Password:": "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2:",
    "Passwords don't match": "\u0394\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03bf\u03c5\u03bd \u03c4\u03b1 \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03ac",
    "Permission": "\u0394\u03b9\u03ba\u03b1\u03af\u03c9\u03bc\u03b1",
    "Permission denied": "\u0391\u03c0\u03b1\u03b3\u03cc\u03c1\u03b5\u03c5\u03c3\u03b7 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "Platform": "\u03a0\u03bb\u03b1\u03c4\u03c6\u03cc\u03c1\u03bc\u03b1",
    "Please check the network.": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03bb\u03ad\u03b3\u03be\u03c4\u03b5 \u03c4\u03b7 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7 \u03bc\u03b5 \u03c4\u03bf \u03b4\u03af\u03ba\u03c4\u03c5\u03bf.",
    "Please enter 1 or more character": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 1 \u03ae \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03bf\u03c5\u03c2 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2",
    "Please enter a new password": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03bd\u03ad\u03bf \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc",
    "Please enter password": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc",
    "Please enter the new password again": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac \u03c4\u03bf \u03bd\u03ad\u03bf \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc",
    "Please enter the old password": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03c4\u03bf \u03c0\u03b1\u03bb\u03b9\u03cc \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc",
    "Please enter the password again": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac \u03c4\u03bf \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc",
    "Please input at least an email.": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 email.",
    "Previous": "\u03a0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf",
    "Profile": "\u03a0\u03c1\u03bf\u03c6\u03af\u03bb",
    "Profile Setting": "\u03a1\u03cd\u03b8\u03bc\u03b9\u03c3\u03b7 \u03c0\u03c1\u03bf\u03c6\u03af\u03bb",
    "Read-Only": "\u039c\u03cc\u03bd\u03bf \u0391\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7",
    "Read-Only library": "\u0392\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7 \u03bc\u03cc\u03bd\u03bf \u03b3\u03b9\u03b1 \u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7",
    "Read-Write": "\u0391\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7-\u0393\u03c1\u03b1\u03c6\u03ae",
    "Read-Write library": "\u0392\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7 \u03b3\u03b9\u03b1 \u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7-\u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae",
    "Really want to delete your account?": "\u0398\u03ad\u03bb\u03b5\u03c4\u03b5 \u03c0\u03c1\u03b1\u03b3\u03bc\u03b1\u03c4\u03b9\u03ba\u03ac \u03bd\u03b1 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03c8\u03b5\u03c4\u03b5 \u03c4\u03bf\u03bd \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc \u03c3\u03b1\u03c2;",
    "Refresh": "\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7",
    "Remove": "\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7",
    "Rename": "\u039c\u03b5\u03c4\u03bf\u03bd\u03bf\u03bc\u03b1\u03c3\u03af\u03b1",
    "Rename File": "\u039c\u03b5\u03c4\u03bf\u03bd\u03bf\u03bc\u03b1\u03c3\u03af\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5",
    "Rename Folder": "\u039c\u03b5\u03c4\u03bf\u03bd\u03bf\u03bc\u03b1\u03c3\u03af\u03b1 \u03c6\u03b1\u03ba\u03ad\u03bb\u03bf\u03c5",
    "Renamed or Moved files": "\u0391\u03c1\u03c7\u03b5\u03af\u03b1 \u03c0\u03bf\u03c5 \u03bc\u03b5\u03c4\u03bf\u03bd\u03bf\u03bc\u03ac\u03c3\u03c4\u03b7\u03ba\u03b1\u03bd \u03ae \u03bc\u03b5\u03c4\u03b1\u03ba\u03b9\u03bd\u03ae\u03b8\u03b7\u03ba\u03b1\u03bd",
    "Replace": "\u0391\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7",
    "Replace file {filename}?": "\u0391\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5 {filename};",
    "Restore": "\u0395\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac",
    "Restore Library": "\u0395\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7\u03c2",
    "Result": "\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1",
    "Saving...": "\u0393\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03b1\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7...",
    "Seafile": "Seafile",
    "Search groups": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03bf\u03bc\u03ac\u03b4\u03c9\u03bd",
    "Search users...": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03c7\u03c1\u03b7\u03c3\u03c4\u03ce\u03bd...",
    "Select a group": "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2",
    "Server Version: ": "\u0388\u03ba\u03b4\u03bf\u03c3\u03b7 \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae:",
    "Set to current": "\u039f\u03c1\u03b9\u03c3\u03c4\u03ad \u03c9\u03c2 \u03b5\u03bd\u03b5\u03c1\u03b3\u03ae",
    "Set user name": "\u039f\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03bf\u03bd\u03cc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7",
    "Settings": "\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2",
    "Share Admin": "\u0394\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03ae\u03c2 \u03ba\u03bf\u03b9\u03bd\u03cc\u03c7\u03c1\u03b7\u03c3\u03c4\u03c9\u03bd",
    "Share To": "\u039a\u03bf\u03b9\u03bd\u03ae \u03c7\u03c1\u03ae\u03c3\u03b7 \u03bc\u03b5",
    "Share existing libraries": "\u039a\u03bf\u03b9\u03bd\u03ae \u03c7\u03c1\u03ae\u03c3\u03b7 \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03c3\u03c9\u03bd \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03b7\u03ba\u03ce\u03bd",
    "Shared By": "\u039a\u03bf\u03b9\u03bd\u03ae \u03c7\u03c1\u03ae\u03c3\u03b7 \u03b1\u03c0\u03cc",
    "Shared Links": "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf\u03b9 \u03ba\u03bf\u03b9\u03bd\u03ae\u03c2 \u03c7\u03c1\u03ae\u03c3\u03b7\u03c2",
    "Show": "\u0395\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7",
    "Size": "\u039c\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2",
    "Submit": "\u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae",
    "Success": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1",
    "Successfully changed library password.": "\u03a4\u03bf \u03c3\u03c5\u03bd\u03b8\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03c4\u03b7\u03c2 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7\u03c2 \u03ac\u03bb\u03bb\u03b1\u03be\u03b5 \u03bc\u03b5 \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1.",
    "Successfully copied %(name)s and %(amount)s other items.": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03b1\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03c4\u03bf\u03c5 %(name)s \u03ba\u03b1\u03b9 %(amount)s \u03ac\u03bb\u03bb\u03c9\u03bd \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03c9\u03bd.",
    "Successfully copied %(name)s and 1 other item.": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03b1\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03c4\u03bf\u03c5 %(name)s \u03ba\u03b1\u03b9 1 \u03ac\u03bb\u03bb\u03bf\u03c5 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5.",
    "Successfully copied %(name)s.": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03b1\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03c4\u03bf\u03c5 %(name)s.",
    "Successfully deleted 1 item": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03b4\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae 1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5.",
    "Successfully deleted 1 item.": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03b4\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae 1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5.",
    "Successfully moved %(name)s and %(amount)s other items.": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03bc\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03c4\u03bf\u03c5 %(name)s \u03ba\u03b1\u03b9 %(amount)s \u03ac\u03bb\u03bb\u03c9\u03bd \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03c9\u03bd.",
    "Successfully moved %(name)s and 1 other item.": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03bc\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03c4\u03bf\u03c5 %(name)s \u03ba\u03b1\u03b9 1 \u03ac\u03bb\u03bb\u03bf\u03c5 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5.",
    "Successfully moved %(name)s.": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03bc\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03c4\u03bf\u03c5 %(name)s.",
    "Successfully transferred the group.": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03bc\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ac \u03c4\u03b7\u03c2 \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2.",
    "System": "\u03a3\u03cd\u03c3\u03c4\u03b7\u03bc\u03b1",
    "System Admin": "\u0394\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03ae\u03c2 \u03c3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2",
    "The owner of this library has run out of space.": "\u039f \u03b9\u03b4\u03b9\u03bf\u03ba\u03c4\u03ae\u03c4\u03b7\u03c2 \u03b1\u03c5\u03c4\u03ae\u03c2 \u03c4\u03b7\u03c2 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7\u03c2 \u03b4\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03ac\u03bb\u03bb\u03bf \u03b5\u03bb\u03b5\u03cd\u03b8\u03b5\u03c1\u03bf \u03c7\u03ce\u03c1\u03bf.",
    "The password will be kept in the server for only 1 hour.": "\u039f \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03b8\u03b1 \u03c0\u03b1\u03c1\u03b1\u03bc\u03b5\u03af\u03bd\u03b5\u03b9 \u03c3\u03c4\u03bf\u03bd \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae \u03bc\u03cc\u03bd\u03bf \u03b3\u03b9\u03b1 1 \u03ce\u03c1\u03b1.",
    "This operation will not be reverted. Please think twice!": "\u0391\u03c5\u03c4\u03ae \u03b7 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03b4\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b1\u03bd\u03b1\u03b9\u03c1\u03b5\u03b8\u03b5\u03af.  \u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03be\u03b1\u03bd\u03b1\u03c3\u03ba\u03b5\u03c6\u03c4\u03b5\u03af\u03c4\u03b5 \u03c4\u03bf!",
    "Time": "\u038f\u03c1\u03b1",
    "Tools": "\u0395\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1",
    "Total Users": "\u03a3\u03c5\u03bd\u03bf\u03bb\u03b9\u03ba\u03bf\u03af \u03c7\u03c1\u03ae\u03c3\u03c4\u03b5\u03c2",
    "Transfer": "\u039c\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ac",
    "Transfer Group": "\u039c\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ac \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2",
    "Trash": "\u039a\u03ac\u03b4\u03bf\u03c2 \u03b1\u03bd\u03b1\u03ba\u03cd\u03ba\u03bb\u03c9\u03c3\u03b7\u03c2",
    "Two-Factor Authentication": "\u03a0\u03b9\u03c3\u03c4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03b4\u03c5\u03bf \u03c0\u03b1\u03c1\u03b1\u03b3\u03cc\u03bd\u03c4\u03c9\u03bd",
    "Type": "\u03a4\u03cd\u03c0\u03bf\u03c2",
    "Unknown": "\u0386\u03b3\u03bd\u03c9\u03c3\u03c4\u03bf",
    "Unlink": "\u0391\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "Unlink device": "\u0391\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7 \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ae\u03c2",
    "Unshare": "\u0391\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03ba\u03bf\u03b9\u03bd\u03ae\u03c2 \u03c7\u03c1\u03ae\u03c3\u03b7\u03c2",
    "Unshare Library": "\u03a3\u03c4\u03b1\u03bc\u03ac\u03c4\u03b7\u03bc\u03b1 \u03ba\u03bf\u03b9\u03bd\u03ae\u03c2 \u03c7\u03c1\u03ae\u03c3\u03b7\u03c2 \u03b2\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b7\u03c2",
    "Update": "\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7",
    "Upload Files": "\u039c\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03b1\u03c1\u03c7\u03b5\u03af\u03c9\u03bd",
    "Upload Folder": "\u03a6\u03ac\u03ba\u03b5\u03bb\u03bf\u03c2 \u03bc\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u03c2",
    "Upload Links": "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf\u03b9 \u03bc\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u03c2",
    "User": "\u03a7\u03c1\u03ae\u03c3\u03c4\u03b7\u03c2",
    "Username:": "\u038c\u03bd\u03bf\u03bc\u03b1 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7:",
    "Users": "\u03a7\u03c1\u03ae\u03c3\u03c4\u03b5\u03c2",
    "Version": "\u0388\u03ba\u03b4\u03bf\u03c3\u03b7",
    "Version Number": "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03ad\u03ba\u03b4\u03bf\u03c3\u03b7\u03c2",
    "View": "\u03a0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae",
    "Virus File": "\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03b9\u03bf\u03cd",
    "Visits": "\u0395\u03c0\u03b9\u03c3\u03ba\u03ad\u03c8\u03b5\u03b9\u03c2",
    "Wrong password": "\u039b\u03ac\u03b8\u03bf\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2",
    "You can use this field at login.": "\u039c\u03c0\u03bf\u03c1\u03b5\u03af\u03c2 \u03bd\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9\u03c2 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03b5\u03af\u03c3\u03bf\u03b4\u03bf.",
    "Your notifications will be sent to this email.": "\u039f\u03b9 \u03b3\u03bd\u03c9\u03c3\u03c4\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9\u03c2 \u03b8\u03b1 \u03b1\u03c0\u03bf\u03c3\u03c4\u03ad\u03bb\u03bb\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf e-mail. ",
    "all": "\u03cc\u03bb\u03b1",
    "all members": "\u03cc\u03bb\u03b1 \u03c4\u03b1 \u03bc\u03ad\u03bb\u03b7",
    "name": "\u03cc\u03bd\u03bf\u03bc\u03b1",
    "unstarred": "\u03c7\u03c9\u03c1\u03af\u03c2 \u03b1\u03c3\u03c4\u03ad\u03c1\u03b9"
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
    "DATETIME_FORMAT": "d/m/Y P",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "d/m/Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y P",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "P",
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

