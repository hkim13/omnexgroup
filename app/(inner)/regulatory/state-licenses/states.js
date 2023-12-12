const statesData = [
    {
        stateName: "National",
        agencyUrl: "https://www.nmlsconsumeraccess.org/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-nmls-license.pdf",
        licenseNumber: "899521",
        agencyLabel: "National Multi-state Licensing System and Registration",
        licenseLabel: "NMLS"
    },
    {
        stateName: "Alabama",
        agencyUrl: "https://asc.alabama.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-alabama-license.pdf",
        licenseNumber: "SOC#306",
        agencyLabel: "Alabama Securities Commission",
        licenseLabel: "Alabama"
    },
    {
        stateName: "Arizona",
        agencyUrl: "https://difi.az.gov/complaints",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-arizona-license.pdf",
        licenseNumber: "MT-0904767",
        agencyLabel: "Arizona Department of Financial Institutions Consumer Affairs Division",
        licenseLabel: "Arizona"
    },
    {
        stateName: "Arkansas",
        agencyUrl: "https://securities.arkansas.gov/file-a-complaint-2/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-arkansas-license.pdf",
        licenseNumber: "20623",
        agencyLabel: "Arkansas Securities Department",
        licenseLabel: "Arkansas"
    },
    {
        stateName: "California",
        agencyUrl: "https://dfpi.ca.gov/submit-a-complaint/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-california-license.pdf",
        licenseNumber: "1646",
        agencyLabel: "Department of Financial Protection and Innovation Consumer Service Office",
        licenseLabel: "California"
    },


    {
        stateName: "Colorado",
        agencyUrl: "https://banking.colorado.gov/industry/money-transmitters",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-colorado-license.pdf",
        licenseNumber: "500141",
        agencyLabel: "Colorado Division of Banking",
        licenseLabel: "Colorado"
    },
    {
        stateName: "Connecticut",
        agencyUrl: "https://portal.ct.gov/dob",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-connecticut-license.pdf",
        licenseNumber: "13995",
        agencyLabel: "Connecticut Department of Banking Consumer Credit Division",
        licenseLabel: "Connecticut"
    },
    {
        stateName: "District of Columbia",
        agencyUrl: "https://disb.dc.gov/",
        licenseUrl: "",
        licenseNumber: "MTR899521",
        agencyLabel: "Department of Insurance, Securities and Banking Bureau",
        licenseLabel: ""
    },
    {
        stateName: "Florida",
        agencyUrl: "https://www.flofr.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-florida-license.pdf",
        licenseNumber: "FT20900009",
        agencyLabel: "Florida Office of Financial Regulation",
        licenseLabel: "Florida"
    },
    {
        stateName: "Georgia",
        agencyUrl: "https://dbf.georgia.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-georgia-license.pdf",
        licenseNumber: "22077",
        agencyLabel: "Georgia Dept. of Banking & Finance",
        licenseLabel: "Georgia"
    },
    {
        stateName: "Hawaii",
        agencyUrl: "https://cca.hawaii.gov/dfi/files/2020/02/DFI-Form-CC-Rev.-12-14-FillableForm.pdf",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-hawaii-license.pdf",
        licenseNumber: "HIMT123",
        agencyLabel: "Division of Financial Institutions, Department of Commerce and Consumer Affairs",
        licenseLabel: "Hawaii"
    },
    {
        stateName: "Idaho",
        agencyUrl: "https://www.finance.idaho.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-idaho-license.pdf",
        licenseNumber: "MTL-85",
        agencyLabel: "Idaho Department of Finance",
        licenseLabel: "Idaho"
    },
    {
        stateName: "Illinois",
        agencyUrl: "https://idfpr.illinois.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-illinois-license.pdf",
        licenseNumber: "MT.0000088",
        agencyLabel: "Illinois Dept. of Financial & Professional Regulation",
        licenseLabel: "Illinois"
    },
    {
        stateName: "Indiana",
        agencyUrl: "https://www.in.gov/dfi/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-indiana-license.pdf",
        licenseNumber: "43319",
        agencyLabel: "Indiana Department of Financial Institutions",
        licenseLabel: "Indiana"
    },
    {
        stateName: "Iowa",
        agencyUrl: "https://idob.iowa.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-iowa-license.pdf",
        licenseNumber: "MS-2004-0251",
        agencyLabel: "Iowa Division of Banking",
        licenseLabel: "Iowa"
    },
    {
        stateName: "Kansas",
        agencyUrl: "https://www.osbckansas.org/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-kansas-license.pdf",
        licenseNumber: "MT-0210001",
        agencyLabel: "Kansas Office of the State Bank Commissioner",
        licenseLabel: "Kansas"
    },
    {
        stateName: "Kentucky",
        agencyUrl: "https://kfi.ky.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-kentucky-license.pdf",
        licenseNumber: "SC17596",
        agencyLabel: "Department of Financial Institutions",
        licenseLabel: "Kentucky"
    },
    {
        stateName: "Louisana",
        agencyUrl: "https://ofi.la.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-louisana-license.pdf",
        licenseNumber: "SOC 244",
        agencyLabel: "Louisiana Office of Financial Institutions",
        licenseLabel: "Louisana"
    },
    {
        stateName: "Maine",
        agencyUrl: "https://www.maine.gov/pfr/consumercredit/index.shtm",
        licenseUrl: "",
        licenseNumber: "NMT1910431",
        agencyLabel: "Maine Bureau of Financial Institutions Consumer Outreach Program",
        licenseLabel: ""
    },
    {
        stateName: "Maryland",
        agencyUrl: "https://www.dllr.state.md.us/finance/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-maryland-license.pdf",
        licenseNumber: "899521",
        agencyLabel: "Maryland Office of the Commissioner of Financial Regulation",
        licenseLabel: "Maryland"
    },
    {
        stateName: "Massachusetts",
        agencyUrl: "https://www.mass.gov/orgs/division-of-banks",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-massachusetts-license.pdf",
        licenseNumber: "FT5188",
        agencyLabel: "Massachusetts Division of Banks",
        licenseLabel: "Massachusetts"
    },
    {
        stateName: "Michigan",
        agencyUrl: "https://www.michigan.gov/difs/",
        licenseUrl: "",
        licenseNumber: "NMLS ID 899521",
        agencyLabel: "Michigan Department of Insurance and Financial Services",
        licenseLabel: ""
    },
    {
        stateName: "Minnesota",
        agencyUrl: "https://mn.gov/commerce/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-minnesota-license.pdf",
        licenseNumber: "52025",
        agencyLabel: "Minnesota Dept. of Commerce",
        licenseLabel: "Minnesota"
    },
    {
        stateName: "Mississippi",
        agencyUrl: "https://dbcf.ms.gov/",
        licenseUrl: "",
        licenseNumber: "",
        agencyLabel: "Mississippi Consumer Finance Division",
        licenseLabel: ""
    },
    {
        stateName: "Missouri",
        agencyUrl: "https://finance.mo.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-missouri-license.pdf",
        licenseNumber: "MO-19-8497",
        agencyLabel: "Missouri Division of Finance",
        licenseLabel: "Missouri"
    },
    {
        stateName: "Montana",
        agencyUrl: "https://banking.mt.gov/",
        licenseUrl: "",
        licenseNumber: "",
        agencyLabel: "Montana Division of Banking and Financial Institutions",
        licenseLabel: ""
    },
    {
        stateName: "Nebraska",
        agencyUrl: "https://ndbf.nebraska.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-nebraska-license.pdf",
        licenseNumber: "965",
        agencyLabel: "Nebraska Dept. of Banking and Finance",
        licenseLabel: "Nebraska"
    },
    {
        stateName: "Nevada",
        agencyUrl: "https://fid.nv.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-nevada-license.pdf",
        licenseNumber: "MT10044",
        agencyLabel: "State of Nevada, Dept. of Business & Industry Financial Institutions",
        licenseLabel: "Nevada"
    },
    {
        stateName: "New Hampshire",
        agencyUrl: "https://www.banking.nh.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-new-hampshire-license.pdf",
        licenseNumber: "23176-MT",
        agencyLabel: "New Hampshire Banking Department",
        licenseLabel: "New Hampshire"
    },
    {
        stateName: "New Jersey",
        agencyUrl: "https://www.nj.gov/dobi/index.html",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-new-jersey-license.pdf",
        licenseNumber: "L059382",
        agencyLabel: "New Jersey Dept. of Banking & Insurance",
        licenseLabel: "New Jersey"
    },
    {
        stateName: "New Mexico",
        agencyUrl: "https://www.rld.nm.gov/",
        licenseUrl: "",
        licenseNumber: "",
        agencyLabel: "New Mexico Regulation and Licensing Department - Financial Institutions Division",
        licenseLabel: ""
    },
    {
        stateName: "New York",
        agencyUrl: "https://dfs.ny.gov/complaint",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-new-york-license.pdf",
        licenseNumber: "101464",
        agencyLabel: "Department of Financial Services, Consumer Assistance Unit",
        licenseLabel: "New York"
    },
    {
        stateName: "North Carolina",
        agencyUrl: "https://nccob.nc.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-north-carolina-license.pdf",
        licenseNumber: "127130",
        agencyLabel: "North Carolina Commissioner of Banks",
        licenseLabel: "North Carolina"
    },
    {
        stateName: "North Dakota",
        agencyUrl: "https://www.nd.gov/dfi/",
        licenseUrl: "",
        licenseNumber: "127130",
        agencyLabel: "North Dakota Department of Financial Institutions - Consumer Division",
        licenseLabel: ""
    },
    {
        stateName: "Ohio",
        agencyUrl: "https://com.ohio.gov/divisions-and-programs/financial-institutions/financial-institutions",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-ohio-license.pdf",
        licenseNumber: "OHMT31",
        agencyLabel: "Ohio Department of Commerce Division of Financial Institutions",
        licenseLabel: "Ohio"
    },
    {
        stateName: "Oregon",
        agencyUrl: "https://dfr.oregon.gov/Pages/index.aspx",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-oregon-license.pdf",
        licenseNumber: "MTX30024",
        agencyLabel: "Oregon Division of Financial Regulation",
        licenseLabel: "Oregon"
    },
    {
        stateName: "Pennsylvania",
        agencyUrl: "https://www.dobs.pa.gov/Pages/default.aspx",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-pennsylvania-license.pdf",
        licenseNumber: "15556",
        agencyLabel: "Pennsylvania Dept.of Banking and Securities",
        licenseLabel: "Pennsylvania"
    },
    {
        stateName: "Rhode Island",
        agencyUrl: "https://dbr.ri.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-rhode-island-license.pdf",
        licenseNumber: "20062022MT",
        agencyLabel: "Rhode Island Dept. of Business Regulation",
        licenseLabel: "Rhode Island"
    },
    {
        stateName: "South Carolina",
        agencyUrl: "https://www.consumer.sc.gov/",
        licenseUrl: "",
        licenseNumber: "",
        agencyLabel: "South Carolina Department of Consumer Affairs",
        licenseLabel: ""
    },
    {
        stateName: "South Dakota",
        agencyUrl: "https://dlr.sd.gov/banking/",
        licenseUrl: "",
        licenseNumber: "MT.2181",
        agencyLabel: "South Dakota Division of Banking",
        licenseLabel: ""
    },
    {
        stateName: "Tennessee",
        agencyUrl: "https://www.tn.gov/tdfi",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-tennessee-license.pdf",
        licenseNumber: "56",
        agencyLabel: "Tennessee Dept. of Financial Institutions",
        licenseLabel: "Tennessee"
    },
    {
        stateName: "Texas",
        agencyUrl: "https://www.dob.texas.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-texas-license.pdf",
        licenseNumber: "2327",
        agencyLabel: "Texas Department of BankingNon-Depository Supervision Division",
        licenseLabel: "Texas"
    },
    {
        stateName: "Utah",
        agencyUrl: "https://dfi.utah.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-utah-license.pdf",
        licenseNumber: "96",
        agencyLabel: "Utah Dept. of Financial Institutions",
        licenseLabel: "Utah"
    },
    {
        stateName: "Vermont",
        agencyUrl: "https://dfr.vermont.gov/",
        licenseUrl: "",
        licenseNumber: "100-152",
        agencyLabel: "Vermont Department of Financial Regulation Consumer Services",
        licenseLabel: ""
    },
    {
        stateName: "Virginia",
        agencyUrl: "https://scc.virginia.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-virginia-license.pdf",
        licenseNumber: "MO-375",
        agencyLabel: "Virginia Bureau of Financial Institutions",
        licenseLabel: "Virginia"
    },
    {
        stateName: "Washington",
        agencyUrl: "https://dfi.wa.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-washington-license.pdf",
        licenseNumber: "550-MT-26151",
        agencyLabel: "Washington State Dept. of Financial Institutions",
        licenseLabel: "Washington"
    },
    {
        stateName: "West Virginia",
        agencyUrl: "https://dfi.wv.gov/Pages/default.aspx",
        licenseUrl: "",
        licenseNumber: "WVMT-899521",
        agencyLabel: "West Virginia Division of Financial Institutions",
        licenseLabel: ""
    },
    {
        stateName: "Wisconsin",
        agencyUrl: "https://dfi.wi.gov/Pages/FinancialServices/LicensedFinancial/GeneralInformation.aspx",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-wisconsin-license.pdf",
        licenseNumber: "95",
        agencyLabel: "State of Wisconsin Department of Financial InstitutionsBureau of Consumer Affairs",
        licenseLabel: "Wisconsin"
    },
    {
        stateName: "Wyoming",
        agencyUrl: "https://wyomingbankingdivision.wyo.gov/",
        licenseUrl: "https://www.sharemoney.com/assets/license/send-money-wyoming-license.pdf",
        licenseNumber: "MT-7154",
        agencyLabel: "Wyoming Division of Banking",
        licenseLabel: "Wyoming"
    },
    
    
  ];
  
  export default statesData;