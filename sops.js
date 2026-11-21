/* ===== EDIT THIS FILE: your company details and SOP list ===== */
const SITE = {
  company: " West Zone DC ",
  contacts: [  
        { label: " This page created by Abhinav Dahayat", value: "9340835726/ dabhinav@godrej.com" },
    { label: "Emergency services", value: "Mr.Ramesh" },
    { label: "Safety officer",     value: " Mr.Ramesh /99438806"},
    { label: "Security desk",      value: "Mr. Ankit / 9569961957" }
  ] 
};

/* One line per MP3.
   title: shown on page | file: path in audio/ | category: filter group
   transcript: optional written text ("" if none) */
const SOPS = [
   { title: "Non-Routine Activities Safety Training(नॉन-रूटीन गतिविधियों का सुरक्षा प्रशिक्षण)", file: "audio/safe-loading1.mp3", category: "Warehouse", transcript: "" },
   { title: "Pest Control Procedure(पेस्ट कंट्रोल (कीट नियंत्रण) प्रक्रिया)", file: "audio/safe-loading2.mp3", category: "Warehouse", transcript: "" },
   { title: "Material Handling in Racks(रैक्स में मटेरियल हैंडलिंग की प्रक्रिया)", file: "audio/safe-loading3.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Cutting of Steel Strapping and Seals(स्टील स्ट्रैप और सील काटने की सुरक्षित प्रक्रिया)", file: "audio/safe-loading4.mp3", category: "Warehouse", transcript: "" },
   { title: "Vehicle Reporting Procedure(वाहन रिपोर्टिंग की प्रक्रिया)", file: "audio/safe-loading6.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Use of Weighing Scale(वेइंग स्केल के सुरक्षित उपयोग की प्रक्रिया)", file: "audio/safe-loading7.mp3", category: "Warehouse", transcript: "" },
   { title: "Packing of Spares Procedure(स्पेयर्स की पैकिंग की प्रक्रिया)", file: "audio/safe-loading8.mp3", category: "Warehouse", transcript: "" },
   { title: "Non-Inventory Waste Management(नॉन-इन्वेंटरी वेस्ट प्रबंधन की प्रक्रिया)", file: "audio/safe-loading9.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Vehicle Placement at Dock(डॉक पर वाहन की सुरक्षित प्लेसमेंट)", file: "audio/safe-loading10.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Operation of Stackers(स्टैकर के सुरक्षित संचालन की प्रक्रिया)", file: "audio/safe-loading11.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Use of Stacker at Height(ऊंचाई पर स्टैकर के सुरक्षित उपयोग की प्रक्रिया))", file: "audio/safe-loading12.mp3", category: "Warehouse", transcript: "" },
   { title: "Two-to-Three Tier Stacking of Refrigerators(रेफ्रिजरेटर की 2 से 3 टियर स्टैकिंग की प्रक्रिया)", file: "audio/safe-loading13.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Handling of Damaged Parts(क्षतिग्रस्त पुर्जों की सुरक्षित हैंडलिंग की प्रक्रिया)", file: "audio/safe-loading14.mp3", category: "Warehouse", transcript: "" },
   { title: "Material Dispatch from Warehouse(वेयरहाउस से माल भेजने की प्रक्रिया)", file: "audio/safe-loading15.mp3", category: "Warehouse", transcript: "" },

   { title: "Safe Handling of Fragile Materials (Glass, Granite, Crockery)(नाज़ुक सामान (कांच, ग्रेनाइट, क्रॉकरी) की सुरक्षित हैंडलिंग)", file: "audio/safe-loading16.mp3", category: "Warehouse", transcript: "" },
   { title: "Cylinder Storage and Handling Procedure(सिलेंडर के भंडारण और हैंडलिंग की प्रक्रिया)", file: "audio/safe-loading17.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Loading of Heavy Material(भारी सामान की सुरक्षित लोडिंग की प्रक्रिया)", file: "audio/safe-loading18.mp3", category: "Warehouse", transcript: "" },
   { title: "Housekeeping Procedure(हाउसकीपिंग (साफ-सफाई) की प्रक्रिया)", file: "audio/safe-loading19.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Dispatch of Loaded Vehicles(लोडेड वाहन की सुरक्षित रवानगी की प्रक्रिया)", file: "audio/safe-loading20.mp3", category: "Warehouse", transcript: "" },
    { title: "Safe Charging of MHE (Material Handling Equipment)((वेयरहाउस मशीनों) की सुरक्षित चार्जिंग की प्रक्रिया)", file: "audio/safe-loading21.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Operation of Rolling Shutters(रोलिंग शटर के सुरक्षित संचालन की प्रक्रिया)", file: "audio/safe-loading22.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Loading and Unloading at Second Floor Racks(सेकंड फ्लोर रैक पर लोडिंग और अनलोडिंग की सुरक्षित प्रक्रिया)", file: "audio/safe-loading23.mp3", category: "Warehouse", transcript: "" },
   { title: "Cash Stock Liquidation Procedure(कैश स्टॉक लिक्विडेशन की प्रक्रिया)", file: "audio/safe-loading24.mp3", category: "Warehouse", transcript: "" },
   { title: "E-Commerce Dispatch Procedure(ई-कॉमर्स ग्राहकों को माल भेजने की प्रक्रिया)", file: "audio/safe-loading25.mp3", category: "Warehouse", transcript: "" },
   { title: "Safe Handling and Storage of E-Waste(ई-वेस्ट की सुरक्षित हैंडलिंग और स्टोरेज की प्रक्रिया)", file: "audio/safe-loading27.mp3", category: "Warehouse", transcript: "" },
   { title: "Preventive Maintenance Scheduling of Earth Pits(अर्थ पिट के प्रिवेंटिव मेंटेनेंस की शेड्यूलिंग प्रक्रिया)", file: "audio/safe-loading28.mp3", category: "Warehouse", transcript: "" }

  // add the rest of your 30+ files here
];
