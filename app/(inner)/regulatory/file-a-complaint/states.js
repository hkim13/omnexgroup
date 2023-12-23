const statesData = [
  {
    "state": "Alabama",
    "url": "http://asc.alabama.gov/",
    "phone": "(800)-222-1253",
    "email": "",
    "additionalInformation": "",
    "address": "Alabama Secuirities Commision <br/> P.O. Box 304700 <br/> Montgomery, AL, 36130-4700"
  },
  {
    "state": "Arizona",
    "url": "https://dfi.az.gov/complaints",
    "phone": "(602) 771-2800 or (800) 544-0708",
    "email": "",
    "additionalInformation": "",
    "address": "Arizona Department of Financial Institutions Consumer Affairs Division <br/> 100 N 15th Avenue, Suite 261 <br/> Phoenix, AZ, 85007"
  },
  {
    "state": "Arkansas",
    "url": "http://securities.arkansas.gov/page/364/money-services-how-to-file-a-complaint",
    "phone": "(501) 324-9260 or (800) 981-4429 (Hotline)",
    "email": "ASDInfo@arkansas.gov",
    "additionalInformation": "",
    "address": "Arkansas Securities Department <br/> 1 Commerce Way, Suite 402 <br/> Little Rock, AR, 72202"
  },
  {
    "state": "California",
    "url": "https://dfpi.ca.gov/file-a-complaint/",
    "phone": "(866) 275-2677",
    "email": "",
    "additionalInformation": "If you have complaints with respect to any aspect of the money transmission activities conducted at this location, you may contact the California Department of Financial Protection and Innovation at its toll-free telephone number, 1-866-275-2677, by email at ASK.DFPI@dfpi.ca.gov, or by mail at the following address:",
    "address": "Department of Financial Protection and Innovation<br/>Consumer Service Office<br/>2101 Arena Boulevard<br/>Sacramento, CA 95834"
  }, 
  {
    "state": "Colorado",
    "url": "http://banking.colorado.gov/industry/money-transmitters",
    "phone": "(303) 894-7575",
    "email": "",
    "additionalInformation": "CONSUMER NOTICE: Entities other than FDIC insured financial institutions that conduct money transmission activities in Colorado, including the sale of money orders, transfer of funds, and other instruments for the payment of money or credit, are required to be licensed by the Colorado Division of Banking pursuant to the Money Transmitters Act, Title 11, Article 110, Colorado Revised Statutes. If you have a Question about or Problem with YOUR TRANSACTION - THE MONEY YOU SENT, You must contact the Money Transmitter who processed your transaction for assistance. The Division of Banking does not have access to this information. If you are a Colorado Resident and have a Complaint about THE MONEY TRANSMITTER – THE COMPANY THAT SENT YOUR MONEY, ALL complaints must be submitted in writing. Please fill out the Complaint Form provided on the Colorado Division of Banking’s website and return it and any documentation supporting the complaint via mail or email to the Division of Banking at:<br/><br/>Colorado Division of Banking,<br/>1560 Broadway, Suite 975,<br/>Denver, CO 80202,<br/>email: DORA_BankingWebsite@state.co.us,<br/>website: www.dora.colorado.gov/dob,<br/><br/>AVISO A LOS CLIENTES: Entidades diferentes a aquellas instituciones financieras aseguradas por el FDIC, que dirigen actividades de envío de dinero en Colorado, incluyendo venta de giros postales, giro de fondos e instrumentos de pago o crédito requieren tener licencia de la División Bancaria del Estado de Colorado de acuerdo con el Acto de Transmisores de Dinero, Título 11, Artículo 110, del Estatuto Revisado de Colorado. Si usted tiene una pregunta o duda acerca DE SU TRASACCIÓN - DEL DINERO QUE ENVIÓ, Por favor póngase en contacto con el agente de envíos monetarios que procesó su transacción para obtener ayuda. La División Bancaria de Colorado no tiene acceso a esta información. Si usted es un residente del estado de Colorado y tiene una queja sobre EL AGENTE DE ENVIÓS MONETARIOS – LA COMPAÑÍA QUE ENVIÓ SU DINERO, Todas las quejas deben de ser entregadas por escrito. Por favor llene la forma de quejas que se encuentra en el sitio web de la División Bancaria de Colorado y entrégue la forma junto con los documentos que apoyen su queja por correo o por correo electrónico a la División Bancaria de Colorado al:<br/><br/>Colorado Division of Banking,<br/>1560 Broadway, Suite 975,<br/>Denver, CO 80202,<br/>correo electrónico: DORA_BankingWebsite@state.co.us,<br/>sitio web: www.dora.colorado.gov/dob",
    "address": "Colorado Division of Banking,<br/>1560 Broadway, Suite 975,<br/>Denver, CO 80202"
  },
  {
    "state": "Connecticut",
    "url": "http://www.ct.gov/dob",
    "phone": "(860) 240-8299 or (800) 831-7225",
    "email": "Anne.Cappelli@ct.gov",
    "additionalInformation": "",
    "address": "Connecticut Department of Banking Consumer Credit Division<br/>260 Constitution Plaza<br/>Hartford, CT, 06103-1800"
  },
  {
    "state": "Delaware",
    "url": "https://banking.delaware.gov/",
    "phone": "(302) 739-4235",
    "email": "",
    "additionalInformation": "",
    "address": "Office of the State Bank Commissioner<br/>1110 Forrest Avenue Dover<br/>Dover, DE, 19904"
  },
  {
    "state": "District Of Columbia",
    "url": "https://disb.dc.gov/",
    "phone": "(202) 727-8000",
    "email": "",
    "additionalInformation": "You may file a complaint with the District of Columbia Department of Insurance, Securities and Banking Bureau at <a href='https://disb.dc.gov/service/file-complaint-or-report-fraud' style='text-decoration: underline; font-weight: bold; word-wrap: break-word;'>https://disb.dc.gov/service/file-complaint-or-report-fraud</a>",
    "address": "Department of Insurance, Securities and Banking Bureau<br/>1050 First Street NE, Suite 801<br/>Washington, DC 20002"
  },
  {
    "state": "Florida",
    "url": "https://www.flofr.gov/",
    "phone": "(850) 487-9687",
    "email": "",
    "additionalInformation": "",
    "address": "Florida Office of Financial Regulation<br/>200 E. Gaines Street<br/>Tallahassee, FL, 32399"
  },
  {
    "state": "Georgia",
    "url": "https://dbf.georgia.gov/",
    "phone": "(770) 986-1633 or (888) 986-1633",
    "email": "",
    "additionalInformation": "",
    "address": "Georgia Dept. of Banking & Finance<br/>2990 Brandywine Road, Suite 200<br/>Atlanta, GA, 30341-5565"
  },
  {
    "state": "Hawaii",
    "url": "https://cca.hawaii.gov/dfi/files/2020/02/DFI-Form-CC-Rev.-12-14-FillableForm.pdf",
    "phone": "(808) 586-2820",
    "email": "",
    "additionalInformation": "You may file a complaint with the Hawaii Department of Commerce and Consumer Affairs at <a href='https://cca.hawaii.gov/consumer-complaints/' style='text-decoration: underline; font-weight: bold; word-wrap: break-word;'>https://cca.hawaii.gov/consumer-complaints/</a>",
    "address": "Division of Financial Institutions, Department of Commerce and Consumer Affairs<br/>335 Merchant Street, Room 221<br/>Honolulu, HI 96813"
  },
  {
    "state": "Idaho",
    "url": "http://www.finance.idaho.gov",
    "phone": "(208) 332-8000 or (888) 346-3378",
    "email": "",
    "additionalInformation": "",
    "address": "Idaho Department of Finance<br/>800 Park Blvd., Suite 200<br/>Boise, ID, 83712"
  },
  {
    "state": "Illinois",
    "url": "http://www.idfpr.com",
    "phone": "TTY: 1-866-325-4949, 888-4REGUL8 (888-473-4858)",
    "email": "fprinfo@illinois.gov",
    "additionalInformation": "",
    "address": "Illinois Dept. of Financial & Professional Regulation<br/>320 West Washington Street, 3rd Floor<br/>Springfield, IL, 62786"
  },
  {
    "state": "Indiana",
    "url": "https://www.in.gov/dfi/",
    "phone": "(317) 232-3955 or (800) 382-4880",
    "email": "dficomplaints@dfi.in.gov",
    "additionalInformation": "",
    "address": "Indiana Department of Financial Institutions<br/>30 South Meridian Street, Suite 300<br/>Indianapolis, IN 46204"
  },
  {
    "state": "Iowa",
    "url": "https://www.idob.state.ia.us/",
    "phone": "(515) 281-4014",
    "email": "https://gsecuremail.iowa.gov",
    "additionalInformation": "",
    "address": "Iowa Division of Banking<br/>200 East Grand Avenue, Suite 300<br/>Des Moines, IA, 50309-1827"
  },
  {
    "state": "Kansas",
    "url": "https://www.osbckansas.org",
    "phone": "(785) 296-2266 or (785) 380-3939 or (877) 387-8523",
    "email": "",
    "additionalInformation": "",
    "address": "Kansas Office of the State Bank Commissioner<br/>700 SW Jackson St Suite 300<br/>Topeka, KS, 66603"
  },
  {
    "state": "Kentucky",
    "url": "https://kfi.ky.gov/",
    "phone": "(502) 573-3390 or (800) 223-2579",
    "email": "",
    "additionalInformation": "",
    "address": "Department of Financial Institutions<br/>500 Mero Street, 2 SW 19<br/>Frankfort, KY, 40601"
  },
  {
    "state": "Louisiana",
    "url": "http://www.ofi.state.la.us",
    "phone": "(888) 525-9414 or (225) 925-4660",
    "email": "",
    "additionalInformation": "",
    "address": "Louisiana Office of Financial Institutions<br/>Post Office Box 94095<br/>Baton Rouge, LA, 70804-9095"
  },
  {
    "state": "Maine",
    "url": "https://www.maine.gov/pfr/consumercredit/index.shtml",
    "phone": "(800) 965-5235 or (207) 624-8570",
    "email": "bfi.info@maine.gov",
    "additionalInformation": "You may file a complaint with the Maine Bureau of Consumer Credit Protection at <a href='https://www.maine.gov/pfr/consumercredit/complaint.htm' style='text-decoration: underline; font-weight: bold; word-wrap: break-word;'>https://www.maine.gov/pfr/consumercredit/complaint.htm</a>",
    "address": "Maine Bureau of Financial Institutions Consumer Outreach Program<br/>36 State House Station<br/>Augusta, ME, 04333-0036"
  },
  {
    "state": "Maryland",
    "url": "http://www.dllr.state.md.us/finance/",
    "phone": "(410) 230-6100 or 888-784-0136",
    "email": "dlfrcomplaints-labor@maryland.gov",
    "additionalInformation": "The Commissioner of Financial Regulation for the State of Maryland will accept all questions or complaints regarding Omnex Group Inc., NMLS ID # 899521, Control No. 5297462 at the Office of the Commissioner of Financial Regulation, 1100 North Eutaw Street, Suite 611 Baltimore, Maryland 21201, phone 888-784-0136. Customers can verify the licensing status of Omnex Group Inc. at <a href='https://www.nmlsconsumeraccess.org' style='text-decoration: underline; font-weight: bold; word-wrap: break-word;'>https://www.nmlsconsumeraccess.org</a>",
    "address": "Maryland Office of the Commissioner of Financial Regulation<br/>1100 North Eutaw Street, Suite 611<br/>Baltimore, Maryland 21201"
  },
  {
    "state": "Massachusetts",
    "url": "http://www.mass.gov/dob",
    "phone": "(617) 956-1501 or (800) 495-2265",
    "email": "dobconsumer.assistance@mass.gov",
    "additionalInformation": "",
    "address": "Massachusetts Division of Banks<br/>1000 Washington Street, 10th floor<br/>Boston, MA, 02118-2218"
  },
  {
    "state": "Michigan",
    "url": "https://www.michigan.gov/difs/",
    "phone": "(877) 999-6442",
    "email": "DIFSComplaints@michigan.gov",
    "additionalInformation": "",
    "address": "Michigan Department of Insurance and Financial Services<br/>Consumer Finance Section<br/>PO Box 30220<br/>Lansing, MI 48909-7720"
  },
  {
    "state": "Minnesota",
    "url": "https://mn.gov/commerce/",
    "phone": "(651) 539-1600 or (800) 657-3602",
    "email": "",
    "additionalInformation": "",
    "address": "Minnesota Dept. of Commerce<br/>85 7th Place East, Suite 280<br/>Saint Paul, MN, 55101"
  }, 
  {
    "state": "Mississippi",
    "url": "https://dbcf.ms.gov/",
    "phone": "(800) 844-2499",
    "email": "",
    "additionalInformation": "",
    "address": "Mississippi Consumer Finance Division<br/>PO Box 12129<br/>Jackson, MS 39236-2129"
  },
  {
    "state": "Missouri",
    "url": "https://finance.mo.gov",
    "phone": "(573) 751-3242 or (573) 751-9192 (fax)",
    "email": "finance@dof.mo.gov",
    "additionalInformation": "You may file a complaint with the Missouri Division of Finance at <a href='https://finance.mo.gov/consumers/complaint/complaintform.php' style='text-decoration: underline; font-weight: bold; word-wrap: break-word;'>https://finance.mo.gov/consumers/complaint/complaintform.php</a>",
    "address": "Missouri Division of Finance<br/>Truman State Office Building, Room 630<br/>Jefferson City, MO 65102"
  },
  
  {
    "state": "Montana",
    "url": "http://banking.mt.gov/",
    "phone": "(406) 841-2920",
    "email": "banking@mt.gov",
    "additionalInformation": "",
    "address": "Montana Division of Banking and Financial Institutions<br/>PO Box 200546<br/>Helena, MT, 59620"
  },
  {
    "state": "Nebraska",
    "url": "https://ndbf.nebraska.gov/",
    "phone": "(402) 471-2171 or (877) 471 3445",
    "email": "",
    "additionalInformation": "",
    "address": "Nebraska Dept. of Banking and Finance<br/>1526 K St. #300<br/>Lincoln, NE, 68508"
  },
  {
    "state": "Nevada",
    "url": "https://fid.nv.gov/",
    "phone": "(702) 486-4120",
    "email": "Fidmaster@fid.state.nv.us",
    "additionalInformation": "",
    "address": "State of Nevada, Dept. of Business & Industry Financial Institutions<br/>Office of the Commissioner<br/>3300 W. Sahara Ave., Suite 250<br/>Las Vegas, NV, 89102"
  },
  {
    "state": "New Hampshire",
    "url": "https://www.nh.gov/banking/",
    "phone": "(603) 271-3561",
    "email": "nhbd@banking.nh.gov",
    "additionalInformation": "",
    "address": "New Hampshire Banking Department<br/>53 Regional Drive, Suite 200<br/>Concord, NH, 03301"
  },
  {
    "state": "New Jersey",
    "url": "http://www.state.nj.us/dobi",
    "phone": "(800) 446-7467 or (609) 292-7272",
    "email": "",
    "additionalInformation": "",
    "address": "New Jersey Dept. of Banking & Insurance<br/>NJDOBI, PO Box 471<br/>Trenton, NJ, 08625-0471"
  },
  {
    "state": "New Mexico",
    "url": "https://www.rld.nm.gov/",
    "phone": "(505) 476-4885",
    "email": "",
    "additionalInformation": "",
    "address": "New Mexico Regulation and Licensing Department - Financial Institutions Division<br/>P.O. Box 25101<br/>Santa Fe, NM, 87504"
  },
  {
    "state": "New York",
    "url": "https://dfs.ny.gov/complaint",
    "phone": "(800) 342-3736",
    "email": "consumers@dfs.ny.gov",
    "additionalInformation": "",
    "address": "Department of Financial Services, Consumer Assistance Unit<br/>1 State Street<br/>New York, NY, 10004"
  },
  {
    "state": "North Carolina",
    "url": "http://www.nccob.gov",
    "phone": "(919) 733-3016",
    "email": "",
    "additionalInformation": "",
    "address": "North Carolina Office of the Commissioner of Banks<br/>4309 Mail Service Center<br/>Raleigh, NC, 27699-4309"
  },
  {
    "state": "North Dakota",
    "url": "https://www.nd.gov/dfi/",
    "phone": "(701) 328-9933",
    "email": "DFI@ND.gov",
    "additionalInformation": "You may file a complaint with the North Dakota Department of Financial Institutions - Consumer Division at <a href='http://www.nd.gov/eforms/Doc/sfn50702.pdf' style='text-decoration: underline; font-weight: bold; word-wrap: break-word;'>http://www.nd.gov/eforms/Doc/sfn50702.pdf</a>",
    "address": "North Dakota Department of Financial Institutions - Consumer Division<br/>2000 Schafer Street, Suite G<br/>Bismarck, ND, 58501-1204"
  },
  {
    "state": "Ohio",
    "url": "http://www.com.ohio.gov/fiin",
    "phone": "(614) 728-8400 or (866) 278-0003",
    "email": "Webdfi-oca@com.ohio.gov",
    "additionalInformation": "",
    "address": "Ohio Department of Commerce Division of Financial Institutions<br/>77 South High Street, 21st Floor<br/>Columbus, OH, 43215-6120"
  },
  {
    "state": "Oregon",
    "url": "http://dfr.oregon.gov",
    "phone": "(888) 877-4894",
    "email": "DFR.FinancialServicesHelp@oregon.gov",
    "additionalInformation": "",
    "address": "Oregon Division of Financial Regulation<br/>350 Winter St. NE Room 410<br/>PO Box 14480<br/>Salem, OR, 97309-0405"
  },
  {
    "state": "Pennsylvania",
    "url": "http://www.dobs.pa.gov/",
    "phone": "(800) 722-2657 or (717) 787-1854",
    "email": "",
    "additionalInformation": "",
    "address": "Pennsylvania Dept.of Banking and Securities<br/>Market Square Plaza<br/>17 North Second Street, Suite 1300<br/>Harrisburg, PA, 17101"
  },
  {
    "state": "Rhode Island",
    "url": "http://www.dbr.ri.gov/",
    "phone": "(401) 462-9503",
    "email": "DBR.BankInquiry@dbr.ri.gov",
    "additionalInformation": "",
    "address": "Rhode Island Dept. of Business Regulation<br/>1511 Pontiac Avenue<br/>Cranston, RI, 02920"
  },
  {
    "state": "South Carolina",
    "url": "http://www.consumer.sc.gov",
    "phone": "(800) 922-1594 or (803) 734-4200",
    "email": "",
    "additionalInformation": "",
    "address": "South Carolina Department of Consumer Affairs<br/>P.O. Box 5757<br/>Columbia, SC, 29205-2418"
  },
  {
    "state": "South Dakota",
    "url": "https://dlr.sd.gov/banking/",
    "phone": "(605) 773-3421",
    "email": "banking@state.sd.us",
    "additionalInformation": "You may file a complaint with the South Dakota Division of Banking at <a href='https://dlr.sd.gov/banking/consumers/filing_complaint.aspx' style='text-decoration: underline; font-weight: bold; word-wrap: break-word;'>https://dlr.sd.gov/banking/consumers/filing_complaint.aspx</a>",
    "address": "South Dakota Division of Banking<br/>1601 N Harrison Avenue, Suite 1<br/>Pierre, SD 57501-4590"
  },
  
  {
    "state": "Tennessee",
    "url": "http://www.tn.gov/tdfi",
    "phone": "(615) 741-2236 or (800) 778-4215",
    "email": "TDFI.Contact@tn.gov",
    "additionalInformation": "",
    "address": "Tennessee Dept. of Financial Institutions<br/>312 Rosa L. Parks Avenue, 26th Floor<br/>Nashville, TN, 37243"
  },
  {
    "state": "Texas",
    "url": "http://www.dob.texas.gov",
    "phone": "(877) 276-5554 or (512) 475-1300",
    "email": "msb@dob.texas.gov",
    "additionalInformation": "If you have a complaint, first contact the consumer assistance division of Omnex Group, Inc., toll-free at (866) 819-0119. If you still have an unresolved complaint regarding the company's money transmission or currency exchange activity, please direct your complaint to:",
    "address": "Texas Department of Banking<br/>Non-Depository Supervision Division<br/>2601 N. Lamar Blvd.<br/>Austin, TX, 78705-4294"
  },
  {
    "state": "Utah",
    "url": "https://dfi.utah.gov/",
    "phone": "(801) 538-8830",
    "email": "dfi@utah.gov",
    "additionalInformation": "",
    "address": "Utah Dept. of Financial Institutions<br/>P.O. Box 146800<br/>Salt Lake City, UT, 84114-6800"
  },  
  {
    "state": "Vermont",
    "url": "https://dfr.vermont.gov/",
    "phone": "(802) 828-3301 or 833-DFR-HOTLINE or (833) 337-4685",
    "email": "",
    "additionalInformation": "You may file a complaint with the Vermont Department of Financial Regulation, Banking Division at <a href='https://dfr.vermont.gov/consumers/file-complaint/banking' style='text-decoration: underline; font-weight: bold;'>https://dfr.vermont.gov/consumers/file-complaint/banking</a>",
    "address": "Vermont Department of Financial Regulation Consumer Services<br/>89 Main Street<br/>Montpelier, VT 05620-3101"
  },
  {
    "state": "Virginia",
    "url": "https://scc.virginia.gov",
    "phone": "(804) 371-9701 or (804) 371-9416",
    "email": "",
    "additionalInformation": "You may file a complaint with the Virginia Bureau of Financial Institutions at <a href='https://www.scc.virginia.gov/bfi/complain.aspx' style='text-decoration: underline; font-weight: bold; word-wrap: break-word;'>https://www.scc.virginia.gov/bfi/complain.aspx</a>",
    "address": "Virginia Bureau of Financial Institutions<br/>P.O. Box 640<br/>Richmond, Virginia 23218-0640"
  },
  {
    "state": "Washington",
    "url": "http://www.dfi.wa.gov",
    "phone": "(360) 902-8703 or (877) RING DFI",
    "email": "CSEnforceComplaints@dfi.wa.gov",
    "additionalInformation": "",
    "address": "Washington State Dept. of Financial Institutions<br/>PO Box 41200<br/>Olympia, WA, 98504-1200"
  },
  {
    "state": "West Virginia",
    "url": "https://dfi.wv.gov/Pages/default.aspx",
    "phone": "(304) 558-2294",
    "email": "",
    "additionalInformation": "You may file a complaint with the West Virginia Division of Financial Institutions at <a href='https://dfi.wv.gov/consumers/complaints/Pages/default.aspx' style='text-decoration: underline; font-weight: bold; word-wrap: break-word;'>https://dfi.wv.gov/consumers/complaints/Pages/default.aspx</a>",
    "address": "West Virginia Division of Financial Institutions<br/>900 Pennsylvania Avenue, Suite 306<br/>Charleston, WV 25302-3542"
  },
  {
    "state": "Wisconsin",
    "url": "http://www.wdfi.org/fi/lfs/",
    "phone": "(608) 264-7969 or (800) 452-3328",
    "email": "DFISecretary@wisconsin.gov",
    "additionalInformation": "",
    "address": "State of Wisconsin Department of Financial Institutions<br/>Bureau of Consumer Affairs<br/>P.O. Box 8041<br/>Madison, WI, 53708-8041"
  },
  {
    "state": "Wyoming",
    "url": "http://wyomingbankingdivision.wyo.gov",
    "phone": "(307) 777-7797",
    "email": "wyomingbankingdivision@wyo.gov",
    "additionalInformation": "",
    "address": "Wyoming Division of Banking<br/>Hathaway Building<br/>2300 Capital Ave, 2nd Floor<br/>Cheyenne, WY 82002"
  },  


  






  








   

  



  
  
];

export default statesData;