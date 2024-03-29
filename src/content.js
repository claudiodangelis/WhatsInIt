chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse(init());
  });

var knownExtensions = {

  "ACE" : "ACE Archiver compression file",
  "AIF" : "Audio Interchange File used with SGI and Macintosh applications",
  "ANI" : "Animated cursors used in Microsoft Windows",
  "API" : "Application Program Interface",
  "ART" : "Clipart",
  "ASC" : "ASCII text file",
  "ASM" : "Assembler code",
  "AVI" : "Audio/Video Interleaved used for Windows based movies",
  "BAK" : "Backup Files. ",
  "BAS" : "BASIC programming language sourcecode",
  "BAT" : "MS-DOS batch file",
  "BFC" : "Briefcase document used in Windows",
  "BIN" : "Binary File",
  "BIN" : "MacBinary-encoded files",
  "BMP" : "Bitmap format",
  "BUD" : "Backup Disk for Quicken by Intuit",
  "BZ2" : "Bzip2-compressed files",
  "C" : "C source file",
  "CAT" : "Security Catalog file",
  "CBL" : "Cobol code",
  "CBT" : "Computer Based Training",
  "CDA" : "Compact Disc Audio Track",
  "CDT" : "Corel Draw Template file",
  "CFML" : "ColdFusion Markup Language",
  "CHM" : "Compiled HTML Help files used by Windows",
  "CLASS" : "Javascript Class file",
  "CLP" : "Windows Clipboard file",
  "CMD" : "Dos Command File",
  "COM" : "Command File",
  "CPL" : "Control panel item",
  "CPP" : "C++ programming language source code",
  "CSS" : "Cascading Style Sheet. Creates a common style reference for a set of web pages",
  "CSV" : "Comma Separated Values format",
  "CMF" : "Corel Metafile",
  "CUR" : "Cursor in Microsoft Windows",
  "DAO" : "Registry Backup file for Windows registry",
  "DAT" : "Data file",
  "DD" : "Compressed Archive by Macintosh DiskDoubler",
  "DEB" : "Debian packages",
  "DEV" : "Device Driver. ",
  "DIC" : "Dictionary file",
  "DIR" : "Macromedia Director file",
  "DLL" : "Dynamic Linked Library. Microsoft application file",
  "DMG" : "Apple Disk Image",
  "DOC" : "Document format for Word Perfect and Microsoft Word",
  "DOT" : "Microsoft Word Template",
  "DRV" : "Device Driver",
  "DS" : "TWAIN Data source file",
  "DUN" : "Dial-up networking configuration file",
  "DWG" : "Autocad drawing",
  "DXF" : "Autocad drawing exchange format file",
  "EMF" : "Enhanced Windows Metafile",
  "EML" : "Microsoft Outlook e-mail file",
  "EPS" : "Encapsulated PostScript supported by most graphics programs",
  "EPS2" : "Adobe PostScript Level II Encapsulated Postscript",
  "EXE" : "DOS based executable file which is also known as a program",
  "FFL" : "Microsoft Fast Find file",
  "FFO" : "Microsoft Fast Find file",
  "FLA" : "Macromedia Flash movie format",
  "FNT" : "Font file. ",
  "GIF" : "Graphics Interchange Format that supports animation. Created by CompuServe and used primarily for web use",
  "GID" : "Windows global index. Contains the index information used by Help in Windows",
  "GRP" : "Microsoft Program Manager Group",
  "GZ" : "Unix compressed file",
  "HEX" : "Macintosh binary hex(binhex) file",
  "HLP" : "Standard help file",
  "HT" : "HyperTerminal files. ",
  "HQX" : "Macintosh binary hex(binhex) file",
  "HTM" : "Hyper Text Markup. This markup language is used for web design. ",
  "ICL" : "Icon Library File",
  "ICM" : "Image Color Matching profile",
  "ICO" : "Microsoft icon image",
  "INF" : "Information file used in Windows",
  "INI" : "Initialization file used in Windows",
  "JAR" : "Java Archive. A compressed java file format",
  "JPEG" : "Compression scheme supported by most graphics programs and used predominantly for web use",
  "JPG" : "More common extension for JPEG described above",
  "JS" : "JavaScript File",
  "LAB" : "Microsoft Excel mailing labels",
  "LGO" : "Windows 9x startup logo",
  "LIT" : "eBooks in Microsoft Reader format",
  "LNK" : "Windows 9x shortcut file",
  "LOG" : "Application log file",
  "LSP" : "Autocad(visual) lisp program",
  "MAQ" : "Microsoft Access Query",
  "MAR" : "Microsoft Access Report",
  "MDB" : "Microsoft Access DataBase File",
  "MDL" : "Rose model file. Opens with Visual Modeler or Rational Rose",
  "MID" : "MIDI music file",
  "MOD" : "Microsoft Windows 9.x kernel module",
  "MOV" : "Quicktime movie",
  "MP3" : "MPEG Audio Layer 3",
  "MPEG" : "Animation file format",
  "MPP" : "Microsoft Project File",
  "MSG" : "Microsoft Outlook message file",
  "MSG" : "Fidonet messages",
  "MSI" : "Microsoft Installer",
  "NCF" : "Netware command File",
  "NLM" : "Netware loadable Module",
  "O" : "Object file, used by linkers",
  "OCX" : "ActiveX Control: A component of the Windows environment",
  "OGG" : "Ogg Vorbis digitally encoded music file",
  "OST" : "Microsoft Exchange/Outlook offline file",
  "PAK" : "WAD file that contains information about levels, settings, maps, etc for Quake and Doom",
  "PCL" : "Printer Control Language file. PCL is a Page Description Language developed by HP",
  "PCT" : "Macintosh drawing format. ",
  "PDF" : "Portable Document File",
  "PDR" : "Port driver for windows 95. It is actually a virtual device driver (vxd)",
  "PIF" : "Program Information File",
  "PIF" : "Vector graphics GDF file(IBM Mainframe)",
  "PIF" : "Macintosh Compressed archive",
  "PL" : "Perl source code file",
  "PM" : "Perl Module",
  "PM3" : "PageMaker 3.0 document",
  "PM4" : "PageMaker 4.0 document",
  "PM5" : "PageMaker 5.0 document",
  "PM6" : "PageMaker 6.0 document",
  "PNG" : "Portable Network Graphic file",
  "POL" : "System Policy file for Windows NT",
  "POT" : "Microsoft PowerPoint design template",
  "PPD" : "PostScript Printer description file used in Macintosh and Windows operating systems to provide printer specific features to a driver",
  "PPS" : "Microsoft PowerPoint slide show",
  "PPT" : "Microsoft PowerPoint presentation(default extension)",
  "PRN" : "A print file created as the result of printing to file",
  "PS" : "PostScript file",
  "PSD" : "Native Adobe Photoshop format",
  "PSP" : "Paint Shop Pro image",
  "PST" : "Personal Folder File for Microsoft Outlook",
  "PUB" : "Microsoft Publisher document",
  "PWL" : "Windows Password list file",
  "QIF" : "Quicken Import file",
  "RAM" : "RealAudio Metafile",
  "RAR" : "RAR compressed archive",
  "RAW" : "Raw File Format",
  "RDO" : "Raster Document Object. Proprietary file type used on Xerox ",
  "REG" : "Registry file that contains registry settings",
  "RM" : "RealAudio video file",
  "RPM" : "RedHat Package Manager",
  "RSC" : "Standard resource file",
  "RTF" : "Rich Text Format",
  "SCR" : "Screen Saver file",
  "SEA" : "Self-extracting archive for Macintosh Stuffit files",
  "SGML" : "Standard Generalized Markup Language",
  "SH" : "Unix shell script",
  "SHTML" : "HTML file that supports Server Side Includes(SSI)",
  "SIT" : "Compressed Macintosh Stuffit files",
  "SMD" : "SEGA mega drive ROM file",
  "SVG" : "Adobe scalable vector graphics file",
  "SWF" : "Shockwave Flash file by Macromedia",
  "SWP" : "DOS swap file",
  "SYS" : "Windows system file used for hardware configuration or drivers",
  "TAR" : "Unix Tape Archive",
  "TGA" : "Targa bitmap",
  "TIFF" : "Tagged Image File Format. Universal graphics format supported ",
  "TMP" : "Windows temporary file",
  "TTF" : "True Type font. ",
  "TXT" : "Text Format",
  "UDF" : "Uniqueness Definition File. Used for Windows unattended installations",
  "UUE" : "UU-encoded file",
  "VBX" : "Microsoft Visual basic extension",
  "VM" : "Virtual Memory file",
  "VXD" : "Windows 9x virtual device driver",
  "WAV" : "Waveform sound file",
  "WMF" : "Windows Metafile (graphics format)",
  "WRI" : "Write Document: This is equivalent to RTF, Rich Text Format, ",
  "WSZ" : "Winamp Skin",
  "XCF" : "The GIMP's native image format",
  "XIF" : "Wang imaging file. Wang Image Viewer comes with Windows 95/2000",
  "XIF" : "Xerox Image file (same as TIFF)",
  "XIF" : "Image file eXtended by ScanSoft is similar to TIFF and is a Pagis application format",
  "XLS" : "Microsoft Excel Spreadsheet",
  "XLT" : "Microsoft Excel Template",
  "XML" : "Extensible markup language",
  "XSL" : "XML style sheet",
  "ZIP" : "Compressed Zip archive"
};


function init(){


  var content = new Object();
  content['null'] = true;

    allAnchors = document.getElementsByTagName("a");
    for ( var i = 0; i<allAnchors.length; i++){
      var lastElem = allAnchors[i].href.split("/");
      var le = lastElem[lastElem.length-1];
      if ( le.indexOf('.')!=-1 && le.indexOf(':') == -1)  {

          var ext = (le.split('.').pop());

          if ( knownExtensions[ext.toUpperCase()] != null ){
            content[allAnchors[i].text] = [allAnchors[i].href,knownExtensions[ext.toUpperCase()]];
            content['null'] = false;

          }

          }
        
      }
    

  
  return content;

}


