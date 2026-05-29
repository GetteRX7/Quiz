// ============================================================
// SUBJECTS
// ============================================================
const SUBJECTS = [
  { name: "Rules & Regulations",            short: "Rules & Reg.", icon: "📋" },
  { name: "Safety & Security",              short: "Safety",       icon: "🛡️" },
  { name: "Service & Operating Procedure",  short: "Service",      icon: "🍽️" },
  { name: "Food & Beverage",                short: "F&B",          icon: "☕" }
];

// ============================================================
// DATA
// ============================================================
const DATA = [

// ── SUBJECT 0: Rules & Regulations (60 Q) ──────────────────
[
  {q:"Which function is responsible for managing and controlling the database and storage system for the cabin crew?",o:["QA-B","DQ","QB-A","DQ-1"],a:0},
  {q:"What does AOCR stand for in the CCH section of abbreviations and definitions?",o:["Air Operator Crew Resource","Air Operator Control Reference","Air Operator Control Resource","Air Operator Certificate Requirements"],a:3},
  {q:"What does COMIS stand for in the CCH section of abbreviations and definitions?",o:["Cabin Operation Manual List","Cabin Operation Management List","Crew Online Management Information System","Crew Operation Manual Indicated Safety"],a:2},
  {q:"What does FCOM stand for?",o:["First Class Operation Manual","First Class Operating Manual","Flight Crew Operating Manual","Flight Crew Operate Management"],a:2},
  {q:"What does MAAS stand for?",o:["Manual Aircraft Announcement System","Manual Aircraft Address Symbol","Meet And Assist All Stations","Meet And Assist"],a:3},
  {q:"What does NOTOC stand for in the CCH section of abbreviations and definitions?",o:["Number Of Trainee On Call","Notification To Captain","Notification Of Telex On Call","No Operation On C Class"],a:1},
  {q:"What does PHM stand for in the CCH section of abbreviations and definitions?",o:["Passenger Handbook Manual","Passenger Handle Manual","Passenger Handling Manual","Passenger Service Handbook"],a:2},
  {q:"Which one is not on levels of penalty in CCH 2.5?",o:["Written warning","Reprimand","Salary deduction","Employment termination"],a:1},
  {q:"If a cabin crew member is found to have a BMI that exceeds the criteria, the crew member must improve the BMI to achieve the requirement within ___ days. (CCH 2.7)",o:["30","45","60","90"],a:2},
  {q:"When not on duty, cabin crew report to___",o:["DO","DQ","QA","OP-1"],a:2},
  {q:"What is the code for LATE ACTIVITY? (CCH 2.3.1)",o:["L11","L12","L13","L18"],a:1},
  {q:"What is the code for STANDBY UNAVAILABLE? (CCH 2.3.1)",o:["L11","L12","L13","L18"],a:2},
  {q:"What is the code for REFUSED TO FLY? (CCH 2.3.1)",o:["L18","L19","L20","L21"],a:0},
  {q:"What is the code for SICK AFTER CHECK-IN? (CCH 2.3.1)",o:["L18","L19","L20","L21"],a:1},
  {q:"What is the code for MISSED FLIGHT AT LINE STATION? (CCH 2.3.1)",o:["L18","L19","L20","L21"],a:3},
  {q:"What is the code for SICK STANDBY? (CCH 2.3.1)",o:["L21","L22","L23","L24"],a:2},
  {q:"What is the code for DIRECT TO AIRCRAFT? (CCH 2.3.1)",o:["L21","L22","L23","L24"],a:3},
  {q:"What is the code for SICK AFTER ASSIGNED FLIGHT WITHIN 24 HRS. BEFORE SCHEDULED DEPARTURE TIME? (CCH Bulletin01/2023)",o:["L24","L25","L26","L27"],a:1},
  {q:"What is the code for SICK LESS THAN 3 HOURS BEFORE SCHEDULED DEPARTURE TIME? (CCH 2.3.1)",o:["L28","L29","L30","L31"],a:0},
  {q:"What is the code for MISSED BRIEFING? (CCH 2.3.1)",o:["L30","L31","L32","L33"],a:2},
  {q:"What is the code for MISSED CHECK-IN? (CCH 2.3.1)",o:["L30","L31","L32","L33"],a:3},
  {q:"What is the code for FAILURE TO UPDATE DOCUMENTS? (CCH 2.3.1)",o:["L70","L71","L72","L73"],a:1},
  {q:"What is the code for INCOMPLETE DOCUMENT? (CCH 2.3.1)",o:["L70","L71","L72","L73"],a:3},
  {q:"A cabin crew must verify their own absence history and penalty codes (if applicable) by accessing the ICARE system and contact QA-B to settle the case by themselves within ___ days.",o:["15","30","45","60"],a:1},
  {q:"What is the code for INFLIGHT COMMENDATION? (CCH 2.3.2)",o:["L95","L96","L97","L98"],a:2},
  {q:"What is the code for DIRECT COMMENDATION? (CCH 2.3.2)",o:["L95","L96","L97","L98"],a:3},
  {q:"What is the code for MATERNITY LEAVE (WITH PAY)? (CCH Bulletin01/2023)",o:["Z41","Z51","Z61","Z71"],a:3},
  {q:"Upon her delivery date, female cabin crew must inform QA immediately or within___ days by phone. (CCH Bulletin01/2023)",o:["3","5","7","14"],a:1},
  {q:"What is the code for PRIESTHOOD LEAVE? (CCH 2.3.3)",o:["Z71","Z81","Z91","Z93"],a:2},
  {q:"The requisition period for Priesthood Leave (male) should not exceed ____ days. (CCH 2.3.3)",o:["90","120","180","210"],a:1},
  {q:"A buddhist female cabin crew may also request for religious ascetic leave up to___days? (CCH 2.3.3)",o:["90","120","180","210"],a:0},
  {q:"A Muslim cabin crew who has been working with THAI for 2 years and has never performed Muslim Pilgrimage (Hajj) may apply for a leave which the requisition should not exceed ____ days. (CCH 2.3.3)",o:["90","120","180","210"],a:1},
  {q:"What is the code for Temporary Off Duty/ Pending Approval?",o:["L33","L34","L35","L36"],a:1},
  {q:"If the penalty of cabin crew involves a salary deduction, a copy of letter must be sent by QA-B to which function? (CCH 2.5)",o:["DO","DE","3B-C","DI-B"],a:3},
  {q:"In the event of violation that is not severe enough to result in a salary deduction, the staff will be suspended without pay for no more than___days. (CCH 2.5)",o:["5","7","14","21"],a:1},
  {q:"All crew members must hold a passport validity of at least ____days before leaving the country.",o:["90","120","150","180"],a:3},
  {q:"What kind of special meal can the cabin crew not request?",o:["LCML (Low-Calorie Meal)","LFML (Low-Fat Meal)","FPML (Fruit Platter Meal)","SPML (Specific Special Meal) for food allergies"],a:2},
  {q:"Any changes made to the details on a passport must be notified to OP-1 in an appropriate time which is ____ hours for the flight to Australia.",o:["24","48","72","96"],a:1},
  {q:"Which item is not allowed to be kept in carry-on baggage?",o:["Lighters","35 Surgical masks","Power bank 20,000 mAh","Alcohol spray 90 ML"],a:0},
  {q:"Crew checked baggage is allowed to load with the weight that should not exceed___kilograms.",o:["15","18","20","24"],a:2},
  {q:"According to the ____ special meal codes, SPML can be ordered only for health and religious reasons. (CCH Bulletin01/2023)",o:["ICAO","IATA","AOCR","FAA"],a:1},
  {q:"Which is FALSE statement regarding garment bag? (CCGG 69/REV.7)",o:["Keychain is not allowed on garment bag","Only one keychain is allowed (not exceed 10x10 cm)","Garment bag size must not exceed 27x47x4 inches","Garment bag can be embroidered with cabin crew"],a:0},
  {q:"Reimbursement of the physical examination charge must be submitted no later than___days after the issuance date. (CCH 2.6)",o:["120","140","160","180"],a:3},
  {q:"According to CCH, The Traffic Light System shall be used as an assessment tool for___ (CCH 4.9.6)",o:["Call light system","Intoxicated passenger","Sick passenger","Bomb search"],a:1},
  {q:"According to Social Security, what risks are covered among members, including cabin crew member? (CCH 4.2)",o:["Risk of financial loss","Risk of travel mishaps","Risk of sickness, childbirth, disability, death, child allowance, old age and unemployment","Risk of capital loss"],a:2},
  {q:"When does the cabin crew need to submit health check-up documents? (CCH 2.6.3)",o:["Every month","Before 23.59 Bangkok local time on the 25th of the birthday month","After completing a flight","Only during emergencies"],a:1},
  {q:"What function is concerned with cabin crew welfare and benefits? (CCH 4.2)",o:["QA","AB-A","IS-B","GA-A"],a:2},
  {q:"When is a cabin crew entitled to Z81 PERSONAL LEAVE? (CCH 2.3)",o:["For athletic events representation","For religious purposes","For marriage or family matters","For duties other than flight duties"],a:2},
  {q:"If CA Kimberly would like to know the right position to pin the Wings Name Badge, which manual contains the guidelines?",o:["PSM","CCGI","CCM","CCGG"],a:3},
  {q:"Which of the following sentence is relevant to Wings Name Badge? (CCGG 65/REV.7)",o:["Wings Name Badge provided by the company must be worn","Wings Name Badge must be pinned on the left chest of female crew for Thai dress/uniform jacket/apron","Wings Name Badge must be pinned above the top-left pocket of the uniform jacket/serving jacket","All are correct"],a:3},
  {q:"Which sentence is NOT correct? (CCGG REV.7)",o:["The Cabin Crew Grooming Guidance is provided in electronic format only","The Cabin Crew Grooming Guidance can access via MDM Content mobile application","The Cabin Crew Grooming Guidance is specifically prepared to facilitate the conducts and the guidelines of cabin crew personal appearance as the frontline staff in order to minimize passenger satisfaction","The purpose of the CCGG is to achieve the THAI identity and company"],a:2},
  {q:"Cabin crew on active duty must wear a complete uniform in public view. Any special cases regarding health must be approved by___ (CCGG 2/REV.7)",o:["QA-A","QA","QA-B","QB"],a:1},
  {q:"What are the BMI (Body Mass Index) limitations for TG cabin crew? (CCGG 4/REV.7)",o:["Female shall not exceed 25 and male shall not exceed 27.5","Female shall be 25 and male shall be 27","Female shall not exceed 27.5 and male shall not exceed 25","Female shall not exceed 25.5 and male shall not exceed 27.5"],a:0},
  {q:"Company is responsible for expense in case of loss or damage of CA's uniform baggage due to__ (CCGG 68/REV.7)",o:["left unattended for an unreasonably long period of time at hotel","lost or damaged while off duty","lost in a vehicle not provided by company","CA were requested for Direct to Aircraft and loaded their baggage later than others"],a:3},
  {q:"Which lipsticks are not allowed? (CCGG 11.3/REV.7)",o:["Extremely pale","Lip gloss only","Nude","All are correct"],a:3},
  {q:"Which nail polish tone is allowed? (CCGG 12.1/REV.7)",o:["Nude shade","Clear or White shade","Dark shade","Neon/Fluorescent"],a:0},
  {q:"Which sentence is TRUE regarding female short/medium hairstyle? (CCGG 13/REV.7)",o:["The length of bob haircut are permitted to extend to the base of the blouse collar","Extremely curly hairstyles are acceptable","Braids and cornrows can be worn with the hair bun","Clean and well-groomed boyish style is allowed"],a:0},
  {q:"Which sentence is NOT correct regarding female long hairstyle? (CCGG 13/REV.7)",o:["The bun must be positioned between 12:30 o'clock and 5 o'clock when view from the left profile","A very high big bun, and inverted bun, a French twist and a braided are acceptable","A hairnet must be in plain black or dark brown mesh without any ornaments","A wig or hairpiece maybe worn for cabin crew who has an allergic condition"],a:1},
  {q:"Which of the following sentence is correct? (CCGG 73/REV.7)",o:["The eyeglasses must not be worn at the airport","The eyeglasses must not be worn in the cabin (during drink and meal service)","The frame of the glasses must be in a conservative style and color","All are correct"],a:3},
  {q:"Which one is NOT correct regarding male cabin crew hairstyles? (CCGG 42/REV.7)",o:["The hair must not cover any part of the ears, and must not touch the collar","Sideburns must not be lower than the middle part of the ears","The hair length must be shorter than 2 or 3 grade clipper-guard","Wet look hair texture is allowed"],a:2}
],

// ── SUBJECT 1: Safety & Security (84 Q) ────────────────────
[
  {q:"Choose the CORRECT statement regarding cabin crew assigned station. (CCM 1.8.2)",o:["Required cabin crew shall occupy the cabin crew assigned station or assigned passenger seat for takeoff and landing","Required cabin crew shall occupy the cabin crew assigned station for takeoff and landing","Extra cabin crew shall occupy only the assigned passenger seat for takeoff and landing","Required cabin crew shall occupy passenger seat for takeoff and landing"],a:1},
  {q:"Which document is aimed to ensure that the significant change information in the Cabin Crew Manual Part 1 is well updated? (CCM 0.1.2)",o:["Safety Briefing Highlights","Cabin Safety Circular","Cabin Crew Manual Part 1 Temporary Revision","Cabin Crew Manual Part 2 Temporary Revision"],a:2},
  {q:"Which statement is CORRECT concerning the content in the Cabin Crew Manual Part 1? (CCM/TOC)",o:["Chapter 1 Applicable Laws, Regulations and Rules/Chapter 3 Standard Operating Procedures","Chapter 2 Administration of First Aid/Chapter 4 Cabin Emergency Procedures","Chapter 5 Emergency Equipment and Location/Chapter 6 Dangerous Goods","Chapter 4 Dangerous Goods/Chapter 7 Security"],a:2},
  {q:"The flight may be operated with reduced minimum number of required cabin crew subject for the following condition: (CCM 1.8.3)",o:["CAAT may authorize the operation of the flight with reduced minimum number of required cabin crew for up to two consecutive sectors","The minimum number of required cabin crew may be reduced by one or more cabin crew from the required cabin crew complement","The flight may be operated without limitation of sector","The reduction shall be allowed for flight departing from any stations"],a:0},
  {q:"Which word best describes 'an operating procedure or technique, etc. that may result in damage to equipment if not followed carefully'? (CCM 0.1.7)",o:["WARNING","Caution","Note","SOP"],a:1},
  {q:"In case you find any discrepancy in the CCM Part 1, which function is the most suitable you must inform? (CCM 0.1.7)",o:["QA","QA-A","QA-B","QA-C"],a:3},
  {q:"To perform the pre-flight security check, when shall cabin crew who assigned to guard the opened door attaches the Cabin Pre-flight Security Check Form at the appropriate location adjacent to the opened door? (CCM 2.3.4.2)",o:["As soon as cabin crew board the aircraft","When CIC orders CABIN CREW REPORT YOUR EM STATION","Right after finished the pre-flight check of safety and emergency equipment","Just before performing Pre-flight Security Check"],a:3},
  {q:"Which word best describes 'an operating procedure or technique, etc. that may result in personal injury or loss of life if not followed carefully'? (CCM 0.1.7)",o:["WARNING","Caution","Note","SOP"],a:0},
  {q:"Which of the following documents concerning the Unruly/Disruptive Passengers? (CCM 7.1.10)",o:["Passenger Disturbance Report, Flight Disturbance Incident Report, Passenger Notice and AVSEC Form 10","Passenger Disturbance Report, Flight Disturbance Incident Report, Passenger Notice and Witness Form","Passenger Disturbance Report, Flight Disturbance Incident Report, Passenger Notice and AVSEC Form 02","Passenger Disturbance Report, Flight Disturbance Incident Report, Passenger Notice, Witness Form and AVSEC Form 06"],a:1},
  {q:"What shall be done (in sequence) in case there is a discrepancy of number of transit/landing passengers occurs when transit passenger onboard during transit stop? (CCM 2.39.4)",o:["PA reminding landing passengers to disembark, Passenger headcount, Passport and boarding pass check","PA reminding landing passengers to disembark, Passenger headcount, Passengers belongings identification","PA reminding landing passengers to disembark, Passport and boarding pass check, Passenger headcount","PA reminding landing passengers to disembark, Passengers belongings identification, Passport and boarding pass check"],a:0},
  {q:"Which of the following is included in the category of PWD? (CCM 2.5.5)",o:["INAD","YP","CBBG","People who are deaf or hard of hearing"],a:3},
  {q:"When not on flight duty, the Crew-in-Charge (CIC) reports to___. (CCM 1.3.2.1)",o:["DQ","QA","QB","OP-1"],a:1},
  {q:"What should you do if you call station 1L from the crew rest compartment during performing the Cabin Safety and Emergency Equipment Check in the crew rest compartment, but the cabin interphone at station 1L is not available? (CCM 2.38.1)",o:["Call another cabin crew station to confirm the communication/interphone system check","Call station 1L from your assigned station instead","Confirm the communication/interphone system check with CIC by in person","Make another attempt to call station 1L"],a:0},
  {q:"In order to avoid any detriment to a crew member performance, opportunities to consume a meal shall be arranged when the flight duty period exceeds __ (CCM 1.7.2.1)",o:["7 hours","6 hours","5 hours","4 hours"],a:2},
  {q:"If the cabin crew is compelled to contact the pilot requesting permission to enter the flight deck, such cabin crew shall contact the pilot normally but include the _________ which has been set up by PIC prior to each flight. (CCM 2.31.4)",o:["Emergency Code","Identification Code","Urgency Code","Access Code"],a:0},
  {q:"Where can you find the Passenger Disturbance Report (PDR), Flight Disturbance Incident Report (FDIR), and Witness Form? (CCM 7.1.10)",o:["In the clear folder in AH kit","On the back cover of the Cabin Log","In the binder together with the CES","In the Captain Report Folder (CRF)"],a:3},
  {q:"Refer to cabin crew briefing, which of the following topics not included in the Mandatory Requirements for Pre-flight Briefing (Safety/Security)? (CCM 2.1.2)",o:["The characteristics of flight related safety issue and/or hazard identification","Update and recent changes to safety-related issues","Aircraft differentiation, cabin defect related to safety and/or specific aircraft information","Flight plan and NOTAM"],a:3},
  {q:"Which statement is correct regarding the carry-on baggage? (CCM 2.9)",o:["Cabin baggage may only be stowed in approved locations","Cabin baggage should not be stowed against forward or aft bulkhead","Cabin baggage should not be stowed on passenger lap during taxi, takeoff and landing","All answers are correct"],a:3},
  {q:"The variant of aircraft types are considered to be different types if they are not similar in all the following aspects, except? (CCM 1.6.5)",o:["Emergency exit operations","Location and type of safety equipment","Oxygen system","Emergency procedures"],a:2},
  {q:"Choose the functions (or function) that exercise control(s) of the duty periods and rest schemes of all crew members. (CCM 1.7.2.1)",o:["QA-A","QA-A and DP-A","DP-A and OP-1","DQ-1"],a:2},
  {q:"Choose the best answer that explains 'Duty with Takeoff(s) and/or Landing(s) Within the Window of Circadian Low'. (CCM 1.7.5.1)",o:["An early start duty involving take off(s) and/or landing(s) during the period of 0500LT to 0659LT","The duty involving takeoff(s) and/or landing(s) during the period of 0200 to 0559 hours local time","A late finish duty that involving take off(s) and/or landing(s) during the period of 0100LT to 0159LT","An 8-hour period of flight that falls between 2200LT and 0800LT"],a:1},
  {q:"Which statement is correct concerning the duties and responsibilities of cabin crew? (CCM 1.3.1.1)",o:["Regularly check the corporate email to remain informed of important company updates and operational information","Be familiar with available navigational facilities","Have access to the up-to-date revision of CCM, CCOM, CES which is relevant to cabin crew duties","Act as the liaison with the flight crew"],a:0},
  {q:"Flight duty periods may be extended in such unforeseen operational circumstances by no more than __. (CCM 1.7.6.3)",o:["No extension allowed","5 hours","4 hours","3 hours"],a:3},
  {q:"CCM Part 1 is distributed only in the digital format and can be accessed through _____. (CCM 0.1.7)",o:["Operations eLibrary and iCARE website","Operations eLibrary and THAIsphere website","Operations eLibrary and TGIT website","Operations eLibrary and Cabin Crew Handbook"],a:0},
  {q:"To highlight the safety and security standard, the Pre-flight Briefing shall be given prior to the following duty EXCEPT_______. (CCM 2.1.1)",o:["Prior to the commencement of any flight","Prior to the commencement of a series of consecutive flight","When an aircraft returns to operations after having been undergone maintenance","After each full rest period at slipping station"],a:2},
  {q:"Cabin safety and emergency equipment check shall be performed: (CCM 2.2.1)",o:["Prior to the first flight of the crew on an aircraft","Change of cabin crew","Continuous duty periods with crew rest between operations","All answers are correct"],a:3},
  {q:"Which statement is CORRECT regarding ABP briefing? (CCM 4.1.3.2)",o:["ABP-A will be briefed to assist and/or open the exit in case the cabin crew incapacitate","ABP-B will be briefed to assist special categories of passengers","ABP-C will be briefed to assist at the end of the slide and gather passengers upwind away from aircraft","ABP-D will be briefed to help special categories of passengers"],a:0},
  {q:"When CIC orders, 'CABIN CREW REPORT YOUR EM STATION', which duty shall be performed by cabin crew? (CCM 2.38)",o:["Pre-flight security check must be performed according to their specific-colored zones","Check presence of passenger safety instruction card (spot/random check revision and aircraft type)","Perform final cabin safety check","Random inspect 25% of life jacket pouches stowed under passenger seats"],a:1},
  {q:"You are requested the facility of using a bassinet from passenger, you can provide it to the passenger with _____. (CCM 2.5.4.5)",o:["An infant with 6.7 kilograms weight","An infant with 65 inches height","An infant with 68 centimeters height","An infant with 6.7 months age"],a:0},
  {q:"In case the CRS being verified by cabin crew that it is not approved to use on board the CRS shall be___. (CCM 2.5.4.6.3)",o:["Labeled with CABIN tags","Loaded as checked baggage","Properly secured to the aircraft with seat belt and prohibited to use throughout the flight","Installed correctly prior to departure but prohibited to use throughout the flight"],a:1},
  {q:"Choose the best answer that explains 'Passenger Requiring Medical Clearance (MEDA Case)' (CCM 2.5.5.1)",o:["A passenger requires to use oxygen which provided by TG during on board the flight","A passenger refused admission to a country by authorities of such a country","A passenger considered as 'Dangerous Prisoner'","A passenger involved in protecting government officials"],a:0},
  {q:"Which type of passenger that can be accepted only one in economy class cabin in all aircraft type? (CCM 2.5.5.1.2)",o:["Sick passenger traveling with escort","Sick passenger traveling without escort","Stretcher passenger","Wheelchair passenger traveling without escort"],a:2},
  {q:"Which one is defined as passenger who cannot ascend/descend steps but is able to make own way to/from cabin seat, requires wheelchair for distance to/from aircraft, must be carried up/down steps? (CCM 2.5.6.1)",o:["Passenger with type of WCHR","Passenger with type of WCHS","Passenger with type of WCHC","Passenger with type of WCHP"],a:1},
  {q:"Which passenger could be defined as a deportee TYPE A (CCM 2.5.9)",o:["Person who is travelling without proper document and try to be admitted illegally","Person(s) who had legally been admitted into a country or who had entered a country illegally, and who is required later by authorities to be removed from the country","Person who is under arrest by court of law to be transported to another country","Person who is in the custody of authorities and considered as 'Dangerous Prisoner'"],a:1},
  {q:"Which is the embarkation and disembarkation procedure for DEPAs? (CCM 2.5.9.5)",o:["Board the aircraft and disembark after normal passengers","Board the aircraft and disembark the aircraft before normal passengers","Board the aircraft before other passengers and disembark after all passengers have left the aircraft","Board the aircraft after other passengers and disembark before all passengers have left the aircraft"],a:2},
  {q:"Which can be served or provided to deportee type C? (CCM 2.5.9.6.2)",o:["Alcohol beverage","Metal utensils","Food at the discretion of escorts","All answers are correct"],a:2},
  {q:"What duty shall the assigned cabin crew specified in the Guideline for Final Cabin Safety Check immediately perform after the doors are armed? (CCM 2.17.2)",o:["Start cabin emergency preparation","Guard the exits","Perform silent review","Report cabin readiness to CIC"],a:1},
  {q:"What is not include in Cabin Safety and Emergency Equipment Check? (CCM 2.38.1)",o:["Cabin crew shall check door mode selector in 'Disarm' or 'Manual'","Cabin crew shall check presence of passenger safety instruction card","Cabin crew shall check no ground personnel remaining on board","Cabin crew shall check condition and function of cabin crew seat including safety harness"],a:2},
  {q:"During the flight you find that a placard is not legible, you shall ___________. (CCM 2.21)",o:["Report to CIC for entry in the Technical Log. PIC has to sign the Technical Log","Report to CIC for entry in the Technical Log. PIC does not have to sign the Technical Log","Report to CIC for entry in the Cabin Log. PIC has to sign the Cabin Log","Report to CIC for entry in the Cabin Log. PIC does not have to sign the Cabin Log"],a:3},
  {q:"Which defect shall be reported to the PIC for entry in the Technical Log? (CCM 2.21)",o:["A fault system in windows or doors","Markings and placards that are not legible or clearly visible","Cup holder broken","Galley units unable to latch"],a:0},
  {q:"Before takeoff and landing during final cabin safety check, cabin crew shall _________. (CCM 2.22)",o:["Check lavatories in the responsible zone vacant and unlock the lavatory door","Check lavatories in the responsible zone vacant and lock the lavatory door","Check lavatories in the responsible zone occupied and unlock the lavatory door","Check lavatories in the responsible zone occupied and lock the lavatory door"],a:1},
  {q:"Which statement is CORRECT? (CCM 2.27)",o:["All PEDs (including medical PEDs) shall be switched off in Low Visibility Operations","Passenger traveling with CPAP to be used on board must be obtained authorization from PC","The use of a PEDs for voice communication on board an aircraft is not permitted except when the aircraft has landed and exited the active runway","The open compartments designated for literature shall be used for the stowage of lightweight PEDs during taxi, takeoff and landing"],a:2},
  {q:"Which statement is CORRECT concerning the guidelines to be considered for offering meal/beverage service to the flight deck? (CCM 2.33)",o:["The PIC and the co-pilot should be served at the same time","To avoid spillage and consequential damage to electronics, drinks should be served with certain cover passing the central pedestal","To avoid spillage, beverages should be served separately from the meal tray","Alcoholic drinks can be consumed in the flight deck"],a:2},
  {q:"Before reporting 'STATION XX, EMERGENCY EQUIPMENT CHECK COMPLETED', which is the CORRECT conditions? (CCM 2.38.1)",o:["Curtain opened and secured with straps, overhead bins closed, door mode selector in 'DISARM' or 'MANUAL'","Curtain opened and secured with straps, overhead bins opened, door mode selector in 'DISARM' or 'MANUAL'","Curtain closed and secured, overhead bins opened, door mode selector in 'DISARM' or 'MANUAL'","Curtain closed and secured, overhead bins opened, door mode selector in 'ARMED' or 'AUTOMATIC'"],a:1},
  {q:"According to Door Opening Procedure, WHEN READY doorman must: (CCM 2.38.15)",o:["Confirm to ground personnel by Thumb up signal","Notify to ground personnel by Thumb down signal","Not reply","Open the door by using 2-man crew concept"],a:0},
  {q:"Which of the following equipment content in the AED Supplementary Kit? (CCM 3.2.5.3)",o:["Pocket masks and scissors","Pocket masks and yellow biohazard bag","Pocket masks and scoop/scraper","Pocket masks and absorbent powder"],a:0},
  {q:"In order to minimize skin burn in case of fire on person, cabin crew shall instruct a person to ___. (CCM 4.5.8.2.14)",o:["STOP DROP ROLL","Fan the fire","Discharge an extinguisher on him/herself","All of the above"],a:0},
  {q:"Which of the following is not include in the symptoms of Hyperventilation? (CCM 3.3.17)",o:["Rapid and deep breathing","Pain in lower abdomen","Blurring of vision","Muscular spasms of hands and feet"],a:1},
  {q:"Which statement is CORRECT? (CCM 3.4)",o:["Cabin crew or CIC may open the first aid kit only after received the permission from the PIC","When the UPK is used, PIC must be informed in order to enter in the Cabin Log","The cabin crew can open the kit. However, CIC and PIC must always be informed","Passengers traveling with personal portable oxygen bottle to be used on board must be obtained authorization from PC"],a:2},
  {q:"Which statement is correct concerning the use of Zero Two Medical Oxygen during decompression? (CCM 3.4.6)",o:["Replace the Zero Two Medical Oxygen mask with the portable oxygen bottle mask provided by cabin crew","Replace the Zero Two Medical Oxygen mask with the oxygen mask dropped from the aircraft ceiling","Continue using Zero Two Medical Oxygen mask due to the prevention of Hypoxia","Continue using Zero Two Medical Oxygen mask until the selected flow rate oxygen starting to drop"],a:1},
  {q:"To communicate in case of emergency, the flight crew can make an urgency call to the cabin crew via PA: _________ (CCM 4.1.1)",o:['"EMERGENCY STATION"','"CABIN CREW AT YOUR STATION"','"BRACE-BRACE"','"CIC REPORT TO FLIGHT DECK"'],a:3},
  {q:"On prepared emergency landing, how could flight crew alert cabin crew to proceed to their stations before impact? (CCM 4.2.3)",o:['PA, "CABIN CREW AT YOUR STATION"','PA, "EMERGENCY STATION"','PA, "RETURN TO SEAT AND FASTEN SEATBELT"','PA, "BRACE, BRACE"'],a:1},
  {q:"Bracing position for cabin crew AFT facing seat are: _______ (CCM 4.1.4.2.2)",o:["Seat belt low and tight, shoulder harnesses secured, sit upright, press head, back and arms against backrest, legs apart, feet firmly on floor","Seat belt low and tight, shoulder harnesses secured, press chin against chest, arms slightly bent, hands rest on seat cushion, legs apart, feet firmly on the floor","Seat belt low and tight, shoulder harnesses secured, bend fully forward, legs apart, feet firmly on the floor","Seat belt low and tight, shoulder harnesses secured, head bend forward, place arms on lap, legs apart, feet firmly on the floor"],a:0},
  {q:"The priorities of survival are ___. (CCM 4.4.2)",o:["Protection, location, water, food","Protection, location, food, water","Protection, food, water, location","Protection, water, food, location"],a:0},
  {q:"Fire requires 3 elements, combined in the right quantities to exist. The 3 elements are__. (CCM 4.5.2)",o:["Oxygen, heat, fuel","Oxygen, heat, energy","Oxygen, heat, gas","Oxygen, heat, fluid"],a:0},
  {q:"We can use water extinguisher to extinguish _______ fire. (CCM 4.5.3)",o:["Class A","Class A and Class B","Class B and Class C","Class A and Class C"],a:0},
  {q:"During flight there is a loud bang, together with a rush of air outside while you are serving passengers. There is a full cart with you. You shall________. (CCM 4.6.3.2)",o:["Brake the cart and wedge them between passenger seats immediately. Then grab the nearest oxygen mask","Brake the cart and wedge them between passenger seats immediately. Then grab the nearest oxygen mask. Shout 'PULL MASK DOWN, USE IT, DON'","Brake the cart and wedge them between passenger seats immediately. Then proceed to cabin crew seats. Grab oxygen mask","Grab nearest available oxygen mask and put it on immediately. Sit on the nearest seat and fasten seatbelt. Brake the cart and wedge them between passenger seats. Shout, 'PULL MASK DOWN, USE IT'"],a:3},
  {q:"The demonstration kit (Demo Kit) contains___. (CCM 5.5.1)",o:["A Demonstration life vest, an oxygen mask, a seatbelt","A Demonstration life vest, an oxygen mask, a seatbelt, a Safety Instruction Card","A Demonstration life vest, an oxygen mask","A Demonstration life vest, an oxygen mask, a Safety Instruction Card"],a:0},
  {q:"What is the maximum blood alcohol level, in grams per liter, a crew member may have at the start of a flight duty period? (CCM 1.4.2)",o:["0.0","0.02","0.2","0.4"],a:0},
  {q:"In case of emergency situation, emergency flashlights are needed to use. Where can you find them? (CCM 5.4.3)",o:["At each crew member's station","In stowage adjacent to each cabin crew","Under each cabin crew","In stowage/doghouse behind the last rows of each zone"],a:0},
  {q:"How many hazard classes of dangerous goods? (CCM 6.5.2)",o:["8","9","10","11"],a:1},
  {q:"Where can you find the emergency procedure concerning dangerous goods? (CCM 6.11)",o:["Emergency Response Guidance for Aircraft Incidents Involving Dangerous Goods","Cabin Crew Operating Manual","Operations Manual Part A","Cabin Crew Training Manual"],a:0},
  {q:"Where can you find the Table of Provision for Dangerous Goods Carried by Passengers or Crew on THAI (TDGM Table 9-1)",o:["CCM 6.10","CCH 6.10","ERG 6.10","PHM 6.10"],a:0},
  {q:"Which statement is CORRECT? (CCM 7.1.9)",o:["Crew member may restrain unruly passenger with cables without authorizations from the PIC","Crew member shall not restrain any passenger either with handcuffs or other cables without authorization from the PIC","Crew member shall restrain unruly passenger with cables while it is waiting for authorization from the PIC","Under the Chicago Convention, unruly/disruptive passengers cannot be held in restraint beyond the first stopover"],a:1},
  {q:"According to the Bomb on Board Procedure, if the bomb can be moved, where is the least risk bomb location (LRBL)? (CCM 7.2.5)",o:["RH AFT Lavatory","LH AFT Lavatory","RH AFT Cabin Door","LH AFT Cabin Door"],a:2},
  {q:"According to ICAO document 9811, it defines a four-tiered scheme of threat level as following: (CCM 7.1.2)",o:["Level 1: Disruptive behavior (suspicious or verbal threatening), Level 2: Physically abusive behavior, Level 3: Life-threatening behavior, Level 4: Attempted breach or actual breach of the flight crew compartment","Level 1: Physically abusive behavior, Level 2: Disruptive behavior, Level 3: Life-threatening behavior, Level 4: Attempted breach or actual breach of the flight crew compartment","Level 1: Physically abusive behavior, Level 2: Disruptive behavior, Level 3: Attempted breach, Level 4: Life-threatening behavior","Level 1: Disruptive behavior, Level 2: Attempted breach, Level 3: Life-threatening behavior, Level 4: Physically abusive behavior"],a:0},
  {q:"According to CCM 7.4 Hijacking, one crew member assigned to communicate with the hijacker shall___. (CCM 7.4.5)",o:["Negotiate","Encourage hijacker to talk","Attempt to rescue the passenger","All above are correct"],a:1},
  {q:"If a suspect trafficking in persons occurs on board, the cabin crew should___. (CCM 7.5.4/7.5.5)",o:["Attempt to rescue victim","Confront the trafficker","Act normally, do not display unusual concern or alarm","Try to initiate formal conversation"],a:2},
  {q:"During boarding in case passenger belongings left behind is found outside the aircraft and needed to be returned to the owner. For security reason: (CCM 2.38.3)",o:["The items must be identified by passenger in the cabin in presence of cabin crew and ground personnel","The items must be identified by passenger at the aircraft entrance in presence of ground personnel and cabin crew before being allowed to bring into the aircraft","The items must be identified by cabin crew and ground personnel at the aircraft entrance","The items must be identified by ground personnel at the aircraft entrance"],a:1},
  {q:"How to ensure that CIC carries his/her required travel documents and manuals? (CCM 2.1.2)",o:["CIC shows his/her required travel documents and manuals to CSV if applicable","CIC shows his/her required travel documents and manuals to cabin crew dispatcher","CIC crosschecks his/her required travel documents and manuals with the Next CIC","CIC crosschecks his/her required travel documents and manuals with any cabin crew in briefing room"],a:2},
  {q:"Which statement is CORRECT? (CCM 1.4)",o:["Crew member should, as a rule, not donate blood or bone marrow. If a crew member donated blood, flight duty is not permitted within 24 hours","Antihistamines pills should not be taken within 24 hours before flight duty","No sleeping pills may be taken within 12 hours before flight duty","Crew member shall not go deep-sea diving less than 72 hours before starting flight duty"],a:1},
  {q:"Which is the CORRECT answer concerning the restriction in numbers to be carried for the following categories of passengers? (CCM 2.5.2/2.5.3/2.5.5.2)",o:["1 UM for a child aged between 8-11 years old traveling on C-class","2 UM for a child aged between 8-11 years old traveling on C-class","2 YP for a young passenger aged between 12-17 years traveling on C-class","For sick passenger traveling without escort: not more than 4 in First Class or Business Class"],a:0},
  {q:"If the door re-opening is required after door arming for any reasons, what action will be performed after establishing communication between flight deck, cabin and ground personnel and CIC has been notified? (CCM 2.38.5)",o:["Doorman opens the door by using 2-man crew concept","CIC opens the door by using 2-man crew concept","Doorman and Assist Doorman disarm the door by using 2-man crew concept","Doorman and Assist Doorman ensure the door is in arm mode before opening the door"],a:2},
  {q:"There is a life vest stowed on board the aircraft in each passenger seat. Which of the following statement is CORRECT concerning the installation of passenger life vest? (CCM 5.4.1)",o:["The life vest must be stowed properly with a life vest pull strap outside","The life vest must be stowed properly with a life vest pull strap inside","The life vest must be stowed properly with a life vest pull strap under the foot rest cover","The life vest must be stowed properly without a life vest pull strap"],a:0},
  {q:"Where can you find the information about the Standard Operating Procedures regarding Emergency Exit Seats? (CCM/TOC)",o:["CCM Chapter 2","CCM Chapter 4","CCM Chapter 6","CCM Chapter 7"],a:0},
  {q:"How many blind and/or deaf passengers travels with an escort dog can be accepted on TG flights? (CCM 2.5.7.2)",o:["A maximum of 2","A maximum of 5","A maximum of 10","No limit"],a:3},
  {q:"Which of the following is the CORRECT answer concerning Fueling/De-fueling when Passengers are Embarking/Disembarking/on Board? (CCM 2.34)",o:['"Fasten Seat Belts" sign: ON, "No Smoking" sign: ON','"Fasten Seat Belts" sign: ON, "No Smoking" sign: OFF','"Fasten Seat Belts" sign: OFF, "No Smoking" sign: ON','"Fasten Seat Belts" sign: OFF, "No Smoking" sign: OFF'],a:2},
  {q:"Which action is CORRECT when rejected takeoff occurs? (CCM 2.36.2)",o:["Remain at station until the aircraft comes to a complete stop","Assess and monitor the cabin. Keep passengers under control","Do not initiate interphone calls between stations with no serious incident","All answers are correct"],a:3},
  {q:"Which action occurs after CIC reports 'CABIN CLEAR'? (CCM 2.38.5)",o:["CIC confirms the number of passengers with the ground personnel","Cabin crew close and arm all cabin doors","Cabin crew confirm that crew meals are loaded","Cabin crew monitor safety video display on passenger screens"],a:3},
  {q:"If passenger headcount is required at transit stop with a change of CA, which of the following statement is CORRECT? (CCM 2.39)",o:["The inbound CA shall conduct a headcount. The outbound CA must conduct an Aircraft Pre-Departure Security Checks or Search","The inbound CA shall conduct a headcount and an Aircraft Pre-Departure Security Checks or Search","The outbound CA shall conduct a headcount and an Aircraft Pre-Departure Security Checks or Search","The ground personnel shall conduct a headcount. The outbound CA must conduct an Aircraft Pre-Departure Security Checks or Search"],a:0},
  {q:"Portable oxygen bottle in the cabin is used for three purposes EXCEPT___. (CCM 5.2.1)",o:["For use by required cabin crew during walk around after decompression","For use by passengers after decompression","For first-aid treatment of passengers","For use by cabin crew immediately when decompression occurs"],a:3},
  {q:"After using portable oxygen bottles, cabin crew must ensure that the pressure must not be lower than ____. (CCM 5.2.1)",o:["50 PSI","150 PSI","180 PSI","1500 PSI"],a:1},
  {q:"At a transit stop where transit passengers remain on board, if there is only one passenger disembark, no discrepancy in the number of transit/landing passenger found, which statement is CORRECT? (CCM 2.39)",o:["Cabin crew perform post-flight security check and additional onboard passenger belongings identification","Cabin crew perform post-flight security check and conduct passenger headcount","Cabin crew perform post-flight security check and conduct passport and boarding pass check","Cabin crew perform only post-flight security check without additional procedures"],a:0},
  {q:"Which statement is CORRECT in the event of transit passenger remain on board during transit stop? (CCM 2.39)",o:["Prior to passenger disembarkation, cabin crew perform passenger belongings identification","Prior to passenger disembarkation, CIC makes PA requesting passengers to have their boarding passes ready for inspection by ground personnel","Prior to passenger disembarkation, cabin crew perform passenger headcount procedure","Prior to passenger disembarkation, cabin crew perform passport and boarding pass check"],a:1}
],

// ── SUBJECT 2: Service & Operating Procedure (68 Q) ────────
[
  {q:"According to A350-900 Working Routine for 10 CAs, which positions are responsible for C/CL?",o:["1R, X1L, X2L and 2R","1R, X1L FWD, X2L and 2R","1R, X1L, X2L and 2L","1R, X1LAFT, X2L and 2R"],a:1},
  {q:"According to A350-900 Working Routine for 9 CAs, which positions are responsible for C/CL?",o:["1R, 2R, X1L FWD","1R, X1LAFT, X2L and 2L","1R, X1L FWD, X2L","1R, X1LAFT, X2L and 2R"],a:0},
  {q:"According to B777-300ER (77B) Working Routine for 10 CAs, which positions are responsible for C/CL?",o:["1R, 2R, 3L, and X1L","1R, 2R, 3R, and 4L","1R, X1L, 2R and 2L","1R, 2R, X1L and 4L"],a:1},
  {q:"According to B777-300ER (77B) Working Routine for 11 CAs, which positions are responsible for C/CL?",o:["1R, 2R, X1L and 3R","1R, 2R, X1L and X2L","1R, 2R, X1L AFT and 3L","1R, 2R, X1l FWD and 3R"],a:0},
  {q:"According to B777-300ER Working Routine for 12 CAs, which positions are responsible for C/CL? (77B)",o:["1R, 2R, X1L, 3L and 3R","1R, 2R, X1L, X2L and 3R","1R, 2R, X1L, 2L and 3L","1R, 2R, X1LFWD and 3R"],a:1},
  {q:"According to B777-300ER (77B) Working Routine for 13 CAs, which positions are responsible for C/CL?",o:["1R, 2R, X1L, X2L and 3R","1R, 2R, X1L, X1R and 2L","1R, 2R, X1L, 2L and 3R","1R, 2R, X1L, X1R and X2L"],a:3},
  {q:"According to B787-8 Working Routine for 9 CAs, which positions are responsible for C/CL?",o:["1R, 2R and 3L","1R, 2R and 3R","1R, 2R and X1L","1R, 2R and X1LFWD"],a:2},
  {q:"According to B787-8 Working Routine for 10 CAs, what positions are responsible for C/CL?",o:["1R, 2R and X1L","1R, 2R and 3R","1R, X1L and 3R","1R, X1L and X2L"],a:3},
  {q:"According to B777-300ER (77Y) Working Routine for 14 CAs, which positions are responsible for C/CL?",o:["2R, 3L, 2LAFT, X2R and X2L","2R, 3L, 2LFWD, X2R and 3R","2R, 3R, 2LAFT, 2LFWD and X1R","2R, 2LAFT, 2LFWD, X2R and 3R"],a:1},
  {q:"According to the B777-300ER (77Y) Working Routine for 14 CAs, which positions are responsible for Y/CL?",o:["2L AFT, 4L, 4R, 5R, 5L, X5R","2L FWD, 4L, 4R, 5R, 5L, X5R","2L AFT, 3R, 4L, 4R, 5R, 5L","2L FWD, 3R, 4L, 4R, 5R, 5L"],a:0},
  {q:"According to the A321 Working Routine for 6 CAs, which positions are responsible for C/CL?",o:["1L, 1R","1L, XC","1R, XC","1R, 2R"],a:2},
  {q:"Which document provides the specification information and recommended practice for each flight?",o:["Supplementary Information","Route Specialities","Route Procedure","Crew Procedure"],a:1},
  {q:"Which form is used for checking the amount of eau de toilette and hand lotion bottles?",o:["Cabin Article Checklist","A/H kit and Amenities Checklist","Cabin Material Delivery on Board","In-flight Service Equipment Checklist"],a:2},
  {q:"What is the service direction for B777-300ER Royal Silk Class for 10 CAs?",o:["From FWD to AFT","From FWD LH to AFT, Then AFT RH to FWD","From FWD to AFT, Then AFT to FWD","From both galley"],a:0},
  {q:"According to the B777-300ER Working Routine for 13 CAs (77Y), which passenger seat rows are assigned to position X2R for self-introduction, seat orientation, and journey discussion?",o:["11K-15G and 15J-21J","11A-15D and 15B-21B","15K-21K","11A-15D and 11K-15G"],a:3},
  {q:"According to the B777-300ER (77B) Working Routine for 12 CAs, which passenger seat rows are assigned to position X2L for self-introduction, seat orientation, and journey discussion?",o:["11FJ-18FJ + 19K","11BE-18BE + 19D","11FJ-18FJ + 19G","11BE-18BE + 19A"],a:0},
  {q:"Which function is responsible for SI Library?",o:["In-flight Services Standard & Quality Control","In-flight Services Development & Quality Control","In-flight Services Standard & Quality Assurance","In-flight Services Development & Quality Assurance"],a:0},
  {q:"Which function is responsible for working routine?",o:["BKKQA-B","BKKQB-B","BKKQB-A","BKKQA-A"],a:2},
  {q:"How should CA assist passengers with disability during boarding and deplaning? (Ref. ISOP)",o:["Inform passenger that you shall carry passenger in moving to/from seat.","Assist with stowing and retrieving carry-on items.","Inform passenger that you can assist him/her in the lavatory.","Wait for passengers to ask for assistance."],a:1},
  {q:"According to the announcement on privileges for passengers upgraded onboard (Ref: QB-A 09JUN25), which of the following statements is correct?",o:["Passengers upgraded onboard are always entitled to all upgraded class privileges, including meals, lounge access, and frequent flyer points.","Passengers upgraded onboard will not be eligible for certain upgraded class privileges, but the amenity kit should be offered if available in stock.","Passengers upgraded onboard will not be offered an amenity kit under any circumstances.","An amenity kit is provided to the passenger upgraded onboard only on long-haul flights."],a:1},
  {q:"For TG401, where can the CIC or ZSV acting CIC find the Air Stores Inwards Declaration (ASID) form, and what must they do with it? (SI May 2025)",o:["In the clear folder, the AH/Kit in the C/cl; keep it for the next flight.","In the clear folder, the AH/Kit in the C/cl; forward it to the catering staff before departure.","In the A/H kit in the C/CL zone in the same pouch with the menu card; fill up the form and hand it to the ground staff at SIN upon arrival.","In the A/H kit in the C/CL zone in the same pouch with the menu card; send it to the customs office at SIN."],a:2},
  {q:"According to SI (APR 2025), on which routes will the SIRIVANNAVARI branded Amenities Kit be provided in C/CL service?",o:["BKK-CDG-BKK, BKK-MXP-BKK, BKK-NRT-BKK, BKK-PVG-BKK","BKK-CDG-BKK, BKK-LHR-BKK, BKK-HND-BKK, BKK-PVG-BKK","BKK-MXP-BKK, BKK-NRT-BKK, BKK-HKG-BKK, BKK-PVG-BKK","BKK-CDG-BKK, BKK-MXP-BKK, BKK-LAX-BKK, BKK-NRT-BKK"],a:0},
  {q:"According to ISOP in C/CL, CA must attend to passengers call within____. (Ref. ISOP Royal Silk Class)",o:["10 Seconds.","15 Seconds.","20 Seconds.","30 Seconds."],a:2},
  {q:"According to ISOP in C/CL, CA must perform cabin walk around every ____ minutes. (Ref. ISOP Royal Silk Class)",o:["15-20 Minutes.","30 Minutes.","45 Minutes.","More often."],a:1},
  {q:"Which station that Gen Dec. is not required? (Ref. Route Specialities)",o:["FRA","CPH","ZRH","LHR"],a:2},
  {q:"About the Royal Silk welcome drink service, which answer is incorrect?",o:["Champagne should be the first drink offered during the welcome service before take-off","Drip mat must not be placed on passenger seat in advance.","Always show label and mention the name of champagne.","Welcome drink is to be served before offering hot towels during boarding."],a:3},
  {q:"What should cabin crew do when a passenger orders an unfamiliar drink?",o:["Inform passenger politely that we serve only popular drinks.","Inform passenger politely that the special request is served in Royal class only.","Ask politely for the ingredients. If not available, offer another kind of drink.","Inform CIC to solve the problem."],a:2},
  {q:"Which aircraft types offer Panasonic system Wi-Fi service? (Ref. SI Apr 2025)",o:["77Y, 788, 789, 78W, 359, 35D","77Y, 788, 789, 359, 35B","77Y, 788, 789, 359, 35C","77Y, 788, 789, 359, 33C"],a:0},
  {q:"What is the seat configuration of B77E, 77B?",o:["30/279,42/306","30/262,42/306","30/279,32/289","30/262,32/289"],a:1},
  {q:"What is the seat configuration of B77Y?",o:["8/40/265","8/40/255","8/40/245","8/40/235"],a:1},
  {q:"Which city has different UTC from others? (Route Specialities)",o:["Beijing","Singapore","Hanoi","Kuala Lumpur"],a:2},
  {q:"How many copies of GENDEC are require for flight to DPS? (Ref. Route Specialities)",o:["8","9","10","Not require."],a:3},
  {q:"CAs with bar box responsibility on flight to LHR must ___. (Ref. Route Specialities)",o:["Complete C909 form. Seal bars. Put original of C909 inside carts/units and attach copy outside.","Complete C909 form. Seal bars. Put original of C909 outside carts/units and attach copy inside.","Complete C209 form. Seal bars. Put original of C209 inside carts/units and attach copy outside.","Complete C209 form. Seal bars. Put original of C209 inside carts/units and attach copy inside."],a:2},
  {q:"Which station required cabin spray prior to boarding? (Ref. Route Specialities)",o:["CDG","LHR","SYD","HKG"],a:2},
  {q:"According to A350-900 Working Routine for 8 CAs, which positions are responsible for C/CL?",o:["1R, 2L and 3R","1R, 2L and 2R","1R, 2R and 3R","1R, 2R and 3L"],a:2},
  {q:"According to A350-900 Working Routine for 10 CAs, which positions are responsible for Y/CL? (Ref. A350-900 working routine)",o:["2L,3L,3R,4L,4R","2L,2R,3R,4L,4R","2R,3L,3R,4L,4R","2R,3L,3R,4L,4R"],a:0},
  {q:"According to B787-8 Working Routine for 8 CAs, which positions are responsible for C/CL?",o:["1R, 2R and 3R","1R, 2R and 3L","1R, 2L and 2R","1R, 2L and 3L"],a:0},
  {q:"Where can the most recent information regarding formalities, regulations, and procedures about in-flight services be found?",o:["In-flight Services Operation Procedure.","Intercommunication Office Center.","Supplementary Information.","C/A Bulletin."],a:2},
  {q:"What are the 3-letter code for Chennai, Kolkata, Mumbai? (Route Specialities)",o:["CHN, KOL, MUM","CHN, KKL, MUM","MAA, CCU, BOM","MAA, CCK, BOM"],a:2},
  {q:"What is the call sign of B777-300ER (77B)? (Working Routine)",o:["HS-TK__.","HS-TH__.","HS-TQ__.","HS-TW__."],a:0},
  {q:"What is the call sign of B787-8? (Ref: Working Routine)",o:["HS-TG__.","HS-TH__.","HS-TQ__.","HS-TW__."],a:2},
  {q:"What is the call sign of A350-900? (Ref: Working Routine)",o:["HS-TK__.","HS-TY__.","HS-TH__.","HS-TW__."],a:2},
  {q:"What is the call sign of B777-300ER (77Y)? (Ref: Working Routine)",o:["HS-TK__.","HS-TW__.","HS-TH__.","HS-TT__."],a:3},
  {q:"What is NOT the procedure for cabin spray for flight to MNL? (Ref. Route Specialities)",o:["All bins/lockers must be opened.","Air conditioning switched on before performing spray.","Crew members spray towards the open overhead lockers and ceiling and walk one step or one seat row per second.","Spray toilets and coatrooms for 2 seconds each with 1 can, crew rest and flight deck for 3 seconds with 1 can."],a:1},
  {q:"Special Security Arrangement is provided by______? (Ref. SI)",o:["BKKJS","BKKD1","BKKDT","BKKDO"],a:1},
  {q:"UTC at RGN is__? (Ref. Route Specialities)",o:["7.00","6.30","6.15","5.30"],a:1},
  {q:"The correct temperature of serving Champagne is__? (Ref. Royal First Class Handbook)",o:["4-6 degrees Celsius","6-9 degrees Celsius","7-9 degrees Celsius","7-10 degrees Celsius"],a:1},
  {q:"Crew Procedure issued by ___.",o:["BKKDO-A","BKKDQ-1","BKKQA-A","BKKOP-1"],a:0},
  {q:"What is the custom allowance for crew members entering the Kingdom of Thailand? (Ref. Route Specialities)",o:["200 cigarettes or 250 grams of tobacco and 1 litre of liquor.","250 cigarettes or 250 grams of tobacco and 1 litre of liquor.","200 cigarettes or 200 grams of tobacco and 1 litre of liquor.","250 cigarettes or 200 grams of tobacco and 1 litre of liquor."],a:0},
  {q:"Which station is allowed to serve alcoholic beverages during on ground service? (Ref. Station Information)",o:["SIN","DEL","MNL","KUL"],a:3},
  {q:"Which procedure in Y/CL is incorrect during meal tray collection? (Ref. Economy Class Handbook)",o:["Clear remaining service items and debris by ABS tray or waste cart.","During clearance of personal bottled water: If not fully consumed, could be left behind if required","Place plastic bag in empty drawer on top of meal cart for glass collection and folded kitchen roll papers for cleaning purpose.","Use plastic gloves during meal tray collection."],a:2},
  {q:"Where can you find the Royal Silk 'L Size Service' procedure? (Ref. MDM)",o:["QB Service Handbook_Service Procedure Sizing Concept","QB-A Inflight Services Document_Service Procedure Sizing Concept","QB-B Traning Document_Service Procedure Sizing Concept","Cabin Common Document_Service Procedure Sizing Concept"],a:1},
  {q:"According to the updated Medical Usage Record procedure (Ref: SI Mar 2025), what must cabin crew do after opening and using medicine in the Medical Pack?",o:["Record all details into the Crew Kit Application.","Record all details into the Medical Usage Record application in Cabin Connect.","Submit a written report to IQSMS.","Record all details into the Medical Usage Record Form in the Medical Pack."],a:1},
  {q:"What is the meal service direction in the Economy Class for 35D?",o:["From FWD to AFT","From both galley","Separate from row 55, upward and downward","From LH FWD to AFT, then RH AFT to FWD"],a:0},
  {q:"Which of the following assistance is not required for passengers with disability? (Ref. ISOP)",o:["Assisting in stowing and retrieving carry-on items including mobility aids and other devices.","Assisting with the opening of food equipment and beverage packing.","CAs are not required to provide medical services.","Informing about the position of food and service equipment on the passengers table."],a:2},
  {q:"Which procedure in Royal Silk is incorrect? (Royal Silk L Size Service Procedure)",o:["Arrange mixed nuts and dried fruits in small bowl.","Serve hot snack on small plate with fork and knife on cocktail napkin aside.","Lay the linen tablecloth before serving the mixed nuts and dried fruits","Use ABS tray to collect used bowl and plate by hand."],a:1},
  {q:"Which procedure in Royal Silk is incorrect for Lunch/Dinner? (Royal Silk Class L Size Service)",o:["Drink service by service trolley or by hand.","Mixed nuts and hot snack/amuse bouche by hand.","Hot towel on small towel tray.","First course by cart."],a:0},
  {q:"Which procedure is incorrect for Lunch/Dinner? (Ref. L Size Service)",o:["Offer first course by cart.","Offer beverage with First Course by cart only.","Offer cheese and fruit by cart or by hand.","Dessert service is delivered by hand."],a:1},
  {q:"Which procedure in Royal Silk is incorrect for Lunch/Dinner/Supper? (M size service)",o:["Drink service by service trolley.","Snack sachet/mixed nuts & dried fruits by hand.","Offer hot towel on small towel tray.","First course by cart."],a:2},
  {q:"Which procedure is incorrect for Lunch/Dinner/Supper? (Ref. India Route)",o:["Drink service with snack by service trolley.","Meal service by cart.","Bread service on first course cart or by hand","Hot beverage by hand."],a:0},
  {q:"What information must be submitted via Safety Manager 365 if the Royal Silk headphone is missing up to two? (SI)",o:["Missing quantity and passenger nationality","Missing quantity, passenger name, and seat number","Missing quantity and passenger seat number","Missing quantity, passenger seat number and nationality"],a:1},
  {q:"What drink does not belong to the Asian rice wine category? (Cabin Insight)",o:["DEVANOM SATO LUEM PUA","DASSAI 39 JUNMAI DAIGINJO","HORANGI (TIGER) MAKGEOLLI","BELLINO"],a:3},
  {q:"Which flight offers the size L service? (SI)",o:["TG677","TG601","TG615","TG217"],a:0},
  {q:"Which destination requires aircraft disinsection spraying after door-close?",o:["NRT","CDG","SYD","ICN"],a:1},
  {q:"Which of the following destinations is NOT included in the routes that will received the SIRIVANNAVARI Amenities Kit?",o:["CDG","NRT","MXP","SYD"],a:3},
  {q:"What menu is not a part of the 'Premium Asian Noodles' project? (ref. Cabin Insight)",o:["Boat Noodles, braised pork belly","Boat Noodles, sous vide beef short rib","Pad Thai Noodles, jumbo crab blended with rich crab roe and crab fat","Pad Thai Noodles, prawn (ร้านทิพย์สมัย)"],a:3},
  {q:"About the Royal Class welcome drink service, which answer is correct?",o:["Champagne shall be offered as the first priority beverages.","The cabin crew may offer a selection of drinks as welcome drink, present on a silver tray.","Welcome drink is to be served before offering hot towels during boarding.","Preparing a selection of drinks on ABS tray in advance is permitted."],a:0},
  {q:"What is the main ingredient of DEVANOM?",o:["Rice Variety Luem Pua Sticking Rice","Rice Variety Yamada Nishiki Rice","Unpolised Brown Rice","Sangyod Muang Phatthalung Rice"],a:0}
],

// ── SUBJECT 3: Food & Beverage (82 Q) ──────────────────────
[
  {q:"What is Potato Lyonnaise (MLP)?",o:["Fried in butter with onions","Light browned crust or melted with cheese","Roughly chopped into strips","Potato dish with sliced and baked"],a:0},
  {q:"What is a strict European vegetarian which contains no animal products of any type? (SI/ October 2025)",o:["VLML","VOML","VGML","VJML"],a:2},
  {q:"What is Malai Tikka? (MLP)",o:["Creamy yoghurt chicken","Spicy chicken with cottage cheese","Stir fried chicken with paprika","Chicken marinated in yoghurt and pickle brine"],a:0},
  {q:"Which one is correct? (CCSH)",o:["AAC = A/H Kit and Amenities Checklist","CAC = Catering Articles Checklist","LLP = Liqueur Loading Plan","CEC = Cabin Equipment Checklist"],a:0},
  {q:"Which SPML is provided for passengers who have special dietary requirements regarding health?",o:["BBML","DBML","CHML","VJML"],a:1},
  {q:"A tea blend which has been flavored with oil of bergamot is ______.",o:["Earl grey","Camomile","English breakfast","Ceylon tea"],a:0},
  {q:"A meal that omits all foods containing milk, whey, curd or skim milk is typically referred to as _______. (SI/ October 2025)",o:["BLML","NLML","VLML","LFML"],a:1},
  {q:"What is the document that cabin crew can use as a reference in finding meal loading position on each flight? (CCSH)",o:["CMD","CAC","LLP","CEC"],a:3},
  {q:"What is the process for mixing a Shandy?",o:["1/2 chilled beer and 1/2 lemonade","1/2 chilled tomato juice and 1/2 chilled beer","1/2 chilled champagne and 1/2 chilled tomato juice","1/2 Vodka and chilled tomato juice"],a:0},
  {q:"What is the description of Stir fried?",o:["Fry quickly in a little hot fat","Heat food slowly with oil and moisturize in a tightly sealed vessel","Fry in a quantity of fat sufficient to cover the food being cooked","Cook food in a pan in a moderate amount of oil or fat"],a:0},
  {q:"What is the definition of IKURA in JAPANESE?",o:["Salmon roe","Mussels","Seafood","Flying fish roe"],a:0},
  {q:"Which of the following is NOT a Swiss cheese?",o:["Gruyere","Emmental","Tete de Moine","Boursin"],a:3},
  {q:"Which flavor of rice crackers is not available on THAI's flight? (Cabin Insights)",o:["Sauerkraut","Garlic and pepper","Wasabi","Cheddar cheese"],a:3},
  {q:"Which one is the best description of the body of a wine?",o:["The type of grapes used to make the wine","The weight and texture of the wine in the mouth","The level of sweetness and acidity of the wine","The alcohol content of the wine"],a:1},
  {q:"What is the gastronomic definition of Escalope?",o:["A thick, unboned meat cut","A small, round nugget of meat","A thin, boneless slice of meat","A small tender slice of meat"],a:2},
  {q:"What kind of sauce is made by adding melted or clarified butter and lime juice to whisked egg yolks and heated gently?",o:["Soubise","Bechamel sauce","Cardinal sauce","Hollandaise sauce"],a:3},
  {q:"Which of the following is a group of blue cheeses? (CTR)",o:["Havarti, Leicester, Taleggio","Ricotta, Stilton, Port Salut","Gruyere, Gorgonzola, Samsoe","Gorgonzola, Stilton, Roquefort"],a:3},
  {q:"Which of the following group contains only French cheese?",o:["Camembert, Tilsit, Manchego","Roquefort, Boursin, Chevre","Brie, Stilton, Dana blue","Boursin, Gruyere, Emmental"],a:1},
  {q:"Which of the following is NOT related to Kosher meals?",o:["Separation of meat and dairy","Avoidance of pork and shellfish","Supervision by a rabbinic authority","Use of certified halal meat"],a:3},
  {q:"Which statement about Doi Tung Coffee is INCORRECT?",o:["Floral and spicy taste notes","Royal Highland Single Origin","Good taste for a Good Cause project","Arabica coffee"],a:0},
  {q:"Which of the following flights does not require a Muslim passenger to order Muslim meals?",o:["BKK - BOM / KTM / MAA V.V","BKK - BLR / DAC / MCT V.V","BKK - ISB / KHI / LHE V.V","BKK - CCU / CMB / DEL V.V"],a:2},
  {q:"Which pair of the special meal code is for passengers who are strict vegetarians?",o:["VJML / VLML","VGML / VJML","AVML / VOML","AVML / VGML"],a:1},
  {q:"What kind of special meal strictly prohibits the offering of the regular bread rolls?",o:["DBML","LFML","LCML","GFML"],a:3},
  {q:"What is the definition of Vegan?",o:["Vegetarian who consumes vegetables, fruits, nuts and dairy products","Vegetarian who consumes eggs only.","Vegetarian who consumes dairy products.","Vegetarian who avoids all food from the animal kingdom including eggs and dairy products."],a:3},
  {q:"What is the meaning of Simmer?",o:["To cook food in the steam rising from boiling water","To slowly cook food in liquid just below boiling point","To briefly cook food in liquid then put into cold water","To cook food in a small amount of fat, turn and brown on each side"],a:1},
  {q:"What kind of salad dressing is made from wine vinegar, mustard powder, salt and pepper, vegetable oil, sugar and chopped onion?",o:["French dressing","Balsamic dressing","Italian dressing","Thousand Island dressing"],a:0},
  {q:"What kind of salad dressing is made from mustard, salt and pepper, olive oil and lime juice?",o:["French dressing","Balsamic dressing","Italian dressing","Thousand Island dressing"],a:2},
  {q:"What is Waldorf salad?",o:["Mixed vegetables with French dressing and chopped parsley","Fresh apple mixed with breadcrumb, mashed potato, olive oil, salt and pepper","Tender lentil mixed with chopped parsley, scallion and Italian dressing","Canned pineapple or diced fresh apple and celery mixed with mayonnaise and walnut slices"],a:3},
  {q:"What is the meaning of DICE?",o:["To top food with cheese and butter then grill or bake until crisp","To cook food by submerging it in liquid that is just below boiling point","To cut vegetables into neat barrel shapes","To cut food into small, equal sized cubes"],a:3},
  {q:"What is Gajur Mutter Pulao?",o:["Paneer cube cooked with creamy tomato butter sauce","Indian Basmati rice with carrot and green pea","Stir fried cauliflower florets with coriander and turmeric","Indian curry with ginger and masala sauce"],a:1},
  {q:"What kinds of SPML will be added in 2026 to respond to the dietary needs of passengers? (SI/ October 2025)",o:["PNML and FFML","IVML and PFML","NPML and NFML","NFML and PFML"],a:3},
  {q:"What is a stuffed pasta consisting of a filling enclosed between two layers of pasta dough called?",o:["Ravioli","Cannelloni","Lasagne","Tortellini"],a:0},
  {q:"Which country is Heineken beer originally from?",o:["Germany","Denmark","Belgium","The Netherlands"],a:3},
  {q:"What is Prosciutto?",o:["An Italian sausage","An Italian ham","An Italian cheese","An Italian dressing salad"],a:1},
  {q:"What does the term Risotto mean?",o:["A type of pasta made from durum wheat, often served with tomato or cream-based sauces","A rice dish cooked with meat, fish, or vegetables broth until it reaches a creamy consistency","A type of rice pudding, typically sweetened with sugar and flavored with cinnamon or vanilla","A traditional soup made with vegetables, beans, and pasta"],a:1},
  {q:"What is the queen of fruits in Thailand?",o:["Durian","Mangosteen","Rose apple","Rambutan"],a:1},
  {q:"Which type of cheese is soft, features a white bloomy rind, and is made from goat's milk?",o:["Brie","Gorgonzola","Chevre","Camembert"],a:2},
  {q:"What does FPML stand for? (SI/ October 2025)",o:["Fresh fruit plate meal","Fruit plate meal","Fresh fruit platter meal","Fruit platter meal"],a:3},
  {q:"According to IATA special meal code, what does AVML stand for? (SI/ October 2025)",o:["Indian Vegetarian Meal","Asian Vegetarian Meal","Vegetarian Meal","Vegetarian Oriental Meal"],a:1},
  {q:"What does PFML stand for? (SI/ October 2025)",o:["Protein Free Meal","Pea Allergic Meal","Platter Fruit Meal","Peanut Free Meal"],a:3},
  {q:"What does LCML stand for? (SI/ October 2025)",o:["Low Calorie Meal","Low Cholesterol Meal","Low Calorie Diet Meal","Low Calcium Meal"],a:2},
  {q:"Which is recommended temperature of champagne serving?",o:["9-11 degree celcius","10-14 degree celcius","3-5 degree celcius","6-9 degree celcius"],a:3},
  {q:"What does SAUTE mean?",o:["To cook in a small amount of fat, turn and brown on each side with less fat than frying","To cook by direct heat, as on a gridiron over the heat or in an oven under the heat","To cook in a pan or on a griddle over direct heat usually in fat or oil","To burn or char the surface of meat"],a:0},
  {q:"What does BROIL mean?",o:["To cook in a small amount of fat, turn and brown on each side with less fat than frying","To cook by exposing food to direct heat, such as on a gridiron over the heat or in an oven under the heat","To cook in a pan or on a griddle over direct heat usually in fat or oil","To cook by direct heat, usually over hot coals or a flame, with the heat source coming from below"],a:1},
  {q:"What kind of tea is usually served during an afternoon tea service?",o:["English Breakfast tea","Ceylon tea","Camomile tea","Earl Grey tea"],a:3},
  {q:"Which of the following is not a type of pasta?",o:["Taleggio","Conchiglie","Farfalle","Tagliatelle"],a:0},
  {q:"A lean and tender small round steak cut from the thin end of the fillet along the back of the animal can be referred to as _____.",o:["Bistecca","Porterhouse","Filet Mignon","Chateaubriand"],a:2},
  {q:"Which statement is INCORRECT about Kosher meal?",o:["Never break the seal or open the box unless allowed by passenger","Kosher in Hebrew means FIT AND PROPER","Transfer food and equipment from the box to tray before serving","Cream product must not be offered if any meat is served to the Kosher passenger"],a:2},
  {q:"Which of the following statements is most accurate regarding a Diabetic Meal?",o:["The meal is designed for insulin-dependent diabetics and excludes all forms of sugar.","The meal follows dietary guidelines, offering low energy, high dietary fiber, and controlled sugar content.","The meal is prepared with dairy products and is suitable for individuals with lactose intolerance.","The meal meets the dietary needs of athletes and vegetarians."],a:1},
  {q:"Which of the following is not made from pork?",o:["Guanciale","Cambridge sausage","Denver leg","Pancetta"],a:2},
  {q:"What is the definition of Dauphinoise potatoes?",o:["Potatoes cut in small nut-like shapes and lightly fried in brown butter","Fried potatoes along with green and red bell peppers","Cold potato salad with an oil dressing","Sliced potatoes baked in milk, cream and cheese"],a:3},
  {q:"What type of coffee is made by diluting espresso with three parts hot water?",o:["Cappuccino","Macchiato","Americano","Cafe au lait"],a:2},
  {q:"What is the meaning of Julienne?",o:["A type of knife used in French cuisine","A cooking technique involving heat","A food technique for blending ingredients","A food preparation technique involving precise cutting"],a:3},
  {q:"Crew special meals can be requested except _____. (CCH)",o:["LSML","LCML","VLML","FPML"],a:3},
  {q:"During the cheese and fruit service, what should cabin crew offer to passengers?",o:["Cognac and Liqueur","Red wine and Port","Red wine and White wine","Champagne and Liqueur"],a:1},
  {q:"What is Tiramisu?",o:["A layered dessert with coffee and mascarpone","A frozen treat flavored with almond liqueur","A traditional Japanese sweet made with rice flour","A sponge cake infused with espresso and cocoa"],a:0},
  {q:"What is a characteristic of Vodka?",o:["Flavor from the juniper berry and other botanical ingredients","Odorless, tasteless, colorless, and smooth","Aged in oak barrels for a smoky flavor","Made primarily from fermented grapes and known for its fruity aroma"],a:1},
  {q:"Which statement is correct about green tea?",o:["Always offer with sugar and milk","Use boiling water to make green tea","Color of tea should be clear green color","Tea bag can be used more than once"],a:2},
  {q:"What is the term for cutting food into thin, matchstick-like strips?",o:["Julienne","Batonnet","Mince","Shred"],a:0},
  {q:"The cabin crew is able to find information related to the spare soft drink unit from ______, spare toilet articles loading from ______, and the extra paper cocktail napkins from ______, respectively.",o:["CEC, AAC, CAC","CEC, CAC, AAC","CAC, CEC, AAC","AAC, CEC, CAC"],a:1},
  {q:"Which statement best describes Polenta roll?",o:["A elongated roll made from ground cornmeal","Polenta roll is traditionally made from semolina flour","A crescent-shaped roll commonly served with butter","Polenta roll is typically prepared using rye or barley grains"],a:0},
  {q:"What kind of cocktail does not contain alcohol?",o:["Apple Jack","Bloody Mary","Virgin Mary","Red Eye"],a:2},
  {q:"What is the meaning of Whisky dry?",o:["Whisky with ice","Whisky without ice","Whisky mixed with soda","Whisky mixed with ginger ale"],a:3},
  {q:"Which statement about cooking terms is INCORRECT? (CTR)",o:["Roast is to cook in oven by means of a combination of convection and radiation.","Poach is to cook in water that bubbles lightly to prevent overcooking.","Saute is to cook in a small amount of fat, turn and brown on each side with less fat than frying.","Broil is to cook by exposing food to intense direct heat, as beneath the broiler unit of a range or over charcoal."],a:1},
  {q:"When must cabin crew responsible for galley work complete the stock control in Service on Board Report?",o:["Every sector","Before landing in BKK and at crew change station","After landing in BKK and at crew change station","Before landing in BKK only"],a:1},
  {q:"What is the non-strict vegetarian meal that is prepared with dairy products and does not contain any type of fish or meat? (SI/ October 2025)",o:["Vegetarian Lacto-Ovo Meal","Vegetarian Jain Meal","Vegetarian Vegan Meal","Asian Vegetarian Meal"],a:0},
  {q:"What is the recommended serving temperature for white wine?",o:["7-10 degree celcius","10-13 degree celcius","13-15 degree celcius","16-18 degree celcius"],a:0},
  {q:"Which ingredient is added as a garnish to NEGRONI SBAGLIATO? (Cocktail Codex by AB/ 29SEP25)",o:["Lemon Slice","Pansy Flower","Orange Slice","No Garniture Added"],a:2},
  {q:"Which types of alcoholic beverages are produced through the distillation process?",o:["Beer and Wine","Cognac and Whisky","Beer and Whisky","Wine and Cognac"],a:1},
  {q:"Which one is NOT an ingredient of Kalimotxo? (Cocktail Codex by AB/ 29SEP25)",o:["Port Wine","Coca Cola","Italian Red Wine","Orange Slice"],a:0},
  {q:"What is Ragda Patties? (MLP)",o:["Mushroom with green pea","Mustard seed and curry","Potato and pea","Red bean with onion"],a:2},
  {q:"Which Barista menu is currently available on board?",o:["Cold brew coffee","Espresso with orange juice","Thai iced tea with grass jelly","Coffee latte with coffee jelly"],a:2},
  {q:"What is Kachumber Salad?",o:["Green capsicum, green pea, paneer and carrot cooked with masala sauce","Indian Basmati rice with cumin seed","Potato with chopped spring onion","Capsicum and cucumber with chaat masala"],a:3},
  {q:"Which syrup is used in making RRV? (Cocktail Codex by AB/ 29SEP25)",o:["Lemongrass","Rose","Lychee","Pansy"],a:1},
  {q:"Which item is made from buckwheat flour?",o:["Udon","Soba","Vermicelli","Ramen"],a:1},
  {q:"Which cocktail is NOT served in Thai Airways economy class? (Cocktail Codex by AB/ 29SEP25)",o:["Whiskey Highball","Kalimotxo","Gin and Tonic","Legacy Reborn"],a:3},
  {q:"Which type of meat is permissible in Hindu cuisine?",o:["Lamb, Goat, Chicken and Fish","Beef, Prawn, Lamb and Chicken","Mutton, Lamb, Chicken and Beef","Fish, Goat, Beef and Lamb"],a:0},
  {q:"Which of the following fish is a type of freshwater fish?",o:["Mackerel","Grouper","Sole","Trout"],a:3},
  {q:"Which sauce is made from bechamel enriched with grated cheese, egg yolk, mustard and cream?",o:["Cardinal","Mornay","Soubise","Remoulade"],a:1},
  {q:"What kind of coffee is made by pouring steamed milk into freshly brewed espresso until the cup is about three-quarters full, then topping it up with frothed milk?",o:["Espresso","Cappuccino","Latte","Macchiato"],a:2},
  {q:"Which type of tea is made from fresh leaves that are dried immediately after picking, thus stopping oxidation and inactivating enzymes, resulting in a light greenish-yellow color?",o:["Earl grey","English Breakfast tea","Camomile","Japanese Green tea"],a:3},
  {q:"What kind of coffee is made from espresso, steamed milk and milk foam in equal parts?",o:["Espresso","Macchiato","Cappuccino","Cafe au lait"],a:2}
]

]; // end DATA

// ============================================================
// STATE
// ============================================================
const L = ['A', 'B', 'C', 'D'];
let mode       = 'all';
let selSubject = -1;
let isCrossMode = false;
let questions  = [];
let userAnswers = [];
let cur        = 0;
let submitted  = false;
let lastMode   = 'all';
let lastSubject = -1;
let lastCount  = 20;

// Review mode state (M3)
let reviewMode  = false;
let reviewItems = [];
let reviewCur   = 0;

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  updateSlider(20);
  renderHistory();
  showScreen('selectScreen');

  // M4: offer to resume saved progress
  if (loadProgress()) {
    const done = userAnswers.filter(x => x !== null).length;
    if (questions.length > 0 && done > 0 && !submitted) {
      showConfirm(
        '🔄 มีข้อสอบค้างอยู่',
        `ทำไปแล้ว ${done}/${questions.length} ข้อ ต้องการทำต่อหรือไม่?`,
        () => {
          const label = isCrossMode
            ? '🎲 สุ่มข้ามวิชา'
            : SUBJECTS[selSubject].icon + ' ' + SUBJECTS[selSubject].name;
          document.getElementById('quizSubjectLabel').textContent = label;
          showScreen('quizScreen');
          renderNav();
          renderQ();
        },
        'ทำต่อ', 'เริ่มใหม่', () => clearProgress()
      );
    } else {
      clearProgress();
    }
  }
});

// ============================================================
// SCREEN MANAGEMENT
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  const el = document.getElementById(id);
  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// MODE & SUBJECT SELECTION
// ============================================================
function setMode(m) {
  mode = m;
  document.getElementById('tabAll').classList.toggle('active',    m === 'all');
  document.getElementById('tabRandom').classList.toggle('active', m === 'random');
  document.getElementById('tabCross').classList.toggle('active',  m === 'cross');

  const allSec   = document.getElementById('allSection');
  const crossSec = document.getElementById('crossSection');
  const startBtn = document.getElementById('startBtn');

  if (m === 'cross') {
    allSec.classList.add('hidden');
    crossSec.classList.remove('hidden');
    startBtn.disabled = false;
    startBtn.textContent = '✈ เริ่มสุ่มข้ามวิชา';
  } else {
    // 'all' and 'random' both need a subject selected
    allSec.classList.remove('hidden');
    crossSec.classList.add('hidden');
    if (selSubject < 0) {
      startBtn.disabled = true;
      startBtn.textContent = 'กรุณาเลือกวิชาก่อน';
    } else {
      startBtn.disabled = false;
      startBtn.textContent = m === 'random'
        ? '🎲 สุ่ม 20 ข้อ — ' + SUBJECTS[selSubject].name
        : '✈ เริ่มทำแบบทดสอบ — ' + SUBJECTS[selSubject].name;
    }
  }
}

function selectSubject(i) {
  selSubject = i;
  document.querySelectorAll('.subject-card').forEach((c, idx) =>
    c.classList.toggle('selected', idx === i)
  );
  const startBtn = document.getElementById('startBtn');
  startBtn.disabled = false;
  startBtn.textContent = mode === 'random'
    ? '🎲 สุ่ม 20 ข้อ — ' + SUBJECTS[i].name
    : '✈ เริ่มทำแบบทดสอบ — ' + SUBJECTS[i].name;
}

function updateSlider(val) {
  val = parseInt(val);
  document.getElementById('sliderVal').textContent = val;
  const pct = ((val - 5) / (50 - 5)) * 100;
  const slider = document.getElementById('qSlider');
  slider.style.setProperty('--pct', pct.toFixed(1) + '%');
}

// ============================================================
// SHUFFLE
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================================
// START QUIZ
// ============================================================
function startQuiz() {
  submitted = false;
  isCrossMode = (mode === 'cross');

  if (isCrossMode) {
    const count = parseInt(document.getElementById('qSlider').value);
    const pool = [];
    DATA.forEach((subQ, subIdx) =>
      subQ.forEach(q => pool.push({ ...q, subjectIdx: subIdx }))
    );
    questions = shuffle(pool).slice(0, count);
    lastSubject = -1;
    lastCount   = count;
  } else if (mode === 'random') {
    if (selSubject < 0) return;
    questions = shuffle(DATA[selSubject]).slice(0, 20).map(q => ({ ...q, subjectIdx: selSubject }));
    lastSubject = selSubject;
  } else {
    if (selSubject < 0) return;
    questions = DATA[selSubject].map(q => ({ ...q, subjectIdx: selSubject }));
    lastSubject = selSubject;
  }

  lastMode    = mode;
  userAnswers = new Array(questions.length).fill(null);
  cur         = 0;

  const label = isCrossMode
    ? '🎲 สุ่มข้ามวิชา'
    : SUBJECTS[selSubject].icon + ' ' + SUBJECTS[selSubject].name;
  document.getElementById('quizSubjectLabel').textContent = label;

  clearProgress();    // M4: discard any previous saved run
  showScreen('quizScreen');
  renderQ();          // L1: renderQ already calls renderNav() internally
}

// ============================================================
// RENDER QUESTION
// ============================================================
function renderNav() {
  const nav = document.getElementById('qNav');
  nav.innerHTML = '';
  questions.forEach((q, i) => {
    const b = document.createElement('button');
    b.className = 'q-dot';
    b.textContent = i + 1;
    if (i === cur) b.classList.add('cur');
    if (userAnswers[i] !== null) {
      if (submitted) {
        b.classList.add(userAnswers[i] === q.a ? 'answered' : 'wrong-dot');
      } else {
        b.classList.add('answered');
      }
    }
    b.addEventListener('click', () => { cur = i; renderQ(); });
    nav.appendChild(b);
  });
}

function renderQ() {
  if (reviewMode) { renderReviewQ(); return; }
  const total = questions.length;
  const done  = userAnswers.filter(x => x !== null).length;

  document.getElementById('progressFill').style.width = (done / total * 100) + '%';
  document.getElementById('progressText').textContent  = done + ' / ' + total + ' ตอบแล้ว';
  document.getElementById('qCounter').textContent      = 'ข้อ ' + (cur + 1) + '/' + total;

  const q = questions[cur];
  document.getElementById('qNum').textContent  = 'ข้อที่ ' + (cur + 1) + ' จาก ' + total;

  // Subject tag — shown only in cross-subject mode
  const tag = document.getElementById('qSubjectTag');
  if (isCrossMode) {
    const s = SUBJECTS[q.subjectIdx];
    tag.textContent = s.icon + ' ' + s.name;
  } else {
    tag.textContent = '';
  }

  document.getElementById('qText').textContent = q.q;

  // Options
  const opts = document.getElementById('qOptions');
  opts.innerHTML = '';
  q.o.forEach((text, i) => {
    const b = document.createElement('button');
    b.className = 'opt-btn';
    b.innerHTML = '<span class="opt-letter">' + L[i] + '.</span><span>' + text + '</span>';

    if (submitted) {
      b.disabled = true;
      if (i === q.a)                   b.classList.add('correct');
      else if (i === userAnswers[cur]) b.classList.add('wrong');
    } else {
      if (userAnswers[cur] !== null && i === userAnswers[cur]) {
        b.classList.add('selected-pending');
      }
    }
    b.addEventListener('click', () => pick(i));
    opts.appendChild(b);
  });

  // Feedback (after submit)
  const fb = document.getElementById('qFeedback');
  if (submitted && userAnswers[cur] !== null) {
    const correct = userAnswers[cur] === q.a;
    fb.className  = 'feedback show ' + (correct ? 'ok' : 'bad');
    fb.textContent = correct
      ? '✓ ถูกต้อง!'
      : '✗ ผิด — คำตอบที่ถูกต้องคือ ' + L[q.a] + '. ' + q.o[q.a];
  } else {
    fb.className  = 'feedback';
    fb.textContent = '';
  }

  // Nav / submit buttons — use visibility so layout never shifts (U2)
  document.getElementById('prevBtn').style.visibility   = cur === 0         ? 'hidden' : 'visible';
  document.getElementById('nextBtn').style.visibility   = cur === total - 1 ? 'hidden' : 'visible';
  document.getElementById('submitBtn').style.display =
    (userAnswers.every(x => x !== null) && !submitted) ? 'block' : 'none';

  renderNav();

  // U3: scroll current dot into view
  const curDot = document.getElementById('qNav').querySelector('.q-dot.cur');
  if (curDot) curDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
}

// ============================================================
// PICK ANSWER + AUTO-ADVANCE
// ============================================================
function pick(i) {
  if (submitted) return;
  const isFirstAnswer = userAnswers[cur] === null;
  userAnswers[cur] = i;

  // Update options instantly
  Array.from(document.getElementById('qOptions').children).forEach((b, idx) => {
    b.classList.remove('selected-pending');
    if (idx === i) b.classList.add('selected-pending');
  });

  // Update nav dot
  const dot = document.getElementById('qNav').querySelectorAll('.q-dot')[cur];
  dot.classList.add('answered');
  dot.classList.remove('wrong-dot');

  // B2: update progress bar immediately (renderQ not called on last question)
  if (isFirstAnswer) {
    const done  = userAnswers.filter(x => x !== null).length;
    const total = questions.length;
    document.getElementById('progressFill').style.width = (done / total * 100) + '%';
    document.getElementById('progressText').textContent = done + ' / ' + total + ' ตอบแล้ว';
  }

  // Show submit if all done
  if (userAnswers.every(x => x !== null)) {
    document.getElementById('submitBtn').style.display = 'block';
  }

  saveProgress();  // M4: persist after every answer

  // B1/L3: capture cur at schedule time; only advance if user hasn't navigated away
  if (isFirstAnswer && cur < questions.length - 1) {
    const from = cur;
    setTimeout(() => { if (cur === from) { cur++; renderQ(); } }, 400);
  }
}

function navigate(d) {
  if (reviewMode) {
    reviewCur = Math.max(0, Math.min(reviewItems.length - 1, reviewCur + d));
    renderReviewQ();
    return;
  }
  cur = Math.max(0, Math.min(questions.length - 1, cur + d));
  saveProgress();  // M4
  renderQ();
}

function goBack() {
  // In review mode, go back to results (M3)
  if (reviewMode) {
    reviewMode = false;
    document.getElementById('backBtn').textContent = '← กลับ';
    showScreen('resultScreen');
    return;
  }
  // E1: confirm before discarding in-progress quiz
  const answered = userAnswers.filter(x => x !== null).length;
  if (!submitted && answered > 0) {
    showConfirm(
      'ออกจากการทดสอบ',
      `ตอบไปแล้ว ${answered} ข้อ ความคืบหน้าจะหายทั้งหมด`,
      () => { clearProgress(); showScreen('selectScreen'); },
      'ออก', 'อยู่ต่อ', null, true
    );
    return;
  }
  clearProgress();
  showScreen('selectScreen');
}

// ============================================================
// SUBMIT & RESULTS
// ============================================================
function submitQuiz() {
  // U4: require confirmation before locking answers
  showConfirm(
    'ยืนยันการส่งคำตอบ',
    'เมื่อส่งแล้วจะไม่สามารถแก้ไขคำตอบได้',
    doSubmit,
    'ส่งคำตอบ', 'กลับไปตรวจสอบ', null, true
  );
}

function doSubmit() {
  submitted = true;
  clearProgress();  // M4: discard saved run

  // L2: skip rebuilding quiz UI — we go straight to results
  const correct = userAnswers.filter((a, i) => a === questions[i].a).length;
  const wrong   = questions.length - correct;
  const pct     = Math.round(correct / questions.length * 100);
  const pass    = pct >= 70;

  saveScore(pct, correct, questions.length);  // M2

  const subLabel = isCrossMode
    ? '🎲 สุ่มข้ามวิชา'
    : SUBJECTS[lastSubject].icon + ' ' + SUBJECTS[lastSubject].name;

  document.getElementById('scoreCard').innerHTML = `
    <div style="font-size:13px;opacity:0.75;margin-bottom:10px;">${subLabel}</div>
    <div class="score-pct">${pct}%</div>
    <div class="score-label">${pass ? '🎉 ผ่านเกณฑ์!' : '❌ ยังไม่ผ่านเกณฑ์ 70%'}</div>
    <div class="score-stats">
      <div class="stat-box">
        <div class="stat-num" style="color:#5ce0a0">${correct}</div>
        <div class="stat-lbl">ถูก</div>
      </div>
      <div class="stat-box">
        <div class="stat-num" style="color:#ff8080">${wrong}</div>
        <div class="stat-lbl">ผิด</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${questions.length}</div>
        <div class="stat-lbl">ทั้งหมด</div>
      </div>
    </div>`;

  // E3: null guard (defensive — submit is blocked until all answered)
  const wrongItems = questions
    .map((q, i) => ({ q, i, ua: userAnswers[i] }))
    .filter(x => x.ua !== null && x.ua !== x.q.a);

  const wl = document.getElementById('wrongList');
  if (wrongItems.length > 0) {
    wl.innerHTML = `<h3>คำถามที่ตอบผิด (${wrongItems.length} ข้อ)</h3>` +
      wrongItems.map(x => `
        <div class="wrong-item">
          ${isCrossMode
            ? `<div class="wrong-sub">${SUBJECTS[x.q.subjectIdx].icon} ${SUBJECTS[x.q.subjectIdx].name}</div>`
            : ''}
          <div class="wrong-q">ข้อที่ ${x.i + 1}: ${x.q.q}</div>
          <div class="wrong-your">✗ คุณตอบ: ${L[x.ua]}. ${x.q.o[x.ua]}</div>
          <div class="wrong-correct">✓ คำตอบที่ถูก: ${L[x.q.a]}. ${x.q.o[x.q.a]}</div>
        </div>`).join('');
  } else {
    wl.innerHTML =
      '<div style="text-align:center;padding:24px;color:#1a8c5b;font-size:17px;font-weight:700;">🏆 ตอบถูกทุกข้อ!</div>';
  }

  // M3: show review button only when there are wrong answers
  document.getElementById('reviewBtn').style.display = wrongItems.length > 0 ? 'block' : 'none';

  showScreen('resultScreen');
}

// ============================================================
// RETRY & HOME
// ============================================================
function retryQuiz() {
  clearProgress();
  reviewMode = false;
  document.getElementById('reviewBtn').style.display = 'none';
  submitted   = false;
  cur         = 0;

  if (lastMode === 'cross') {
    const pool = [];
    DATA.forEach((subQ, subIdx) =>
      subQ.forEach(q => pool.push({ ...q, subjectIdx: subIdx }))
    );
    questions = shuffle(pool).slice(0, lastCount);
    isCrossMode = true;
  } else if (lastMode === 'random') {
    questions = shuffle(DATA[lastSubject]).slice(0, 20).map(q => ({ ...q, subjectIdx: lastSubject }));
    isCrossMode = false;
  } else {
    questions = DATA[lastSubject].map(q => ({ ...q, subjectIdx: lastSubject }));
    isCrossMode = false;
  }

  userAnswers = new Array(questions.length).fill(null);

  const label = isCrossMode
    ? '🎲 สุ่มข้ามวิชา'
    : SUBJECTS[lastSubject].icon + ' ' + SUBJECTS[lastSubject].name;
  document.getElementById('quizSubjectLabel').textContent = label;

  showScreen('quizScreen');
  renderNav();
  renderQ();
}

function goHome() {
  clearProgress();
  reviewMode = false;
  document.getElementById('reviewBtn').style.display = 'none';
  document.getElementById('backBtn').textContent = '← กลับ';

  mode       = lastMode;
  selSubject = -1;   // E2: always reset regardless of mode
  document.querySelectorAll('.subject-card').forEach(c => c.classList.remove('selected'));

  document.getElementById('tabAll').classList.toggle('active',    mode === 'all');
  document.getElementById('tabRandom').classList.toggle('active', mode === 'random');
  document.getElementById('tabCross').classList.toggle('active',  mode === 'cross');
  document.getElementById('allSection').classList.toggle('hidden',   mode === 'cross');
  document.getElementById('crossSection').classList.toggle('hidden', mode !== 'cross');

  const startBtn = document.getElementById('startBtn');
  if (mode === 'cross') {
    startBtn.disabled = false;
    startBtn.textContent = '✈ เริ่มสุ่มข้ามวิชา';
  } else {
    startBtn.disabled = true;
    startBtn.textContent = 'กรุณาเลือกวิชาก่อน';
  }

  renderHistory();  // M2: refresh history on home screen
  showScreen('selectScreen');
}

// ============================================================
// CONFIRM MODAL  (U4)
// ============================================================
function showConfirm(title, body, onOk, okLabel = 'ยืนยัน', cancelLabel = 'ยกเลิก', onCancel = null, danger = false) {
  document.getElementById('confirmTitle').textContent  = title;
  document.getElementById('confirmBody').textContent   = body;
  document.getElementById('confirmOk').textContent     = okLabel;
  document.getElementById('confirmCancel').textContent = cancelLabel;
  document.getElementById('confirmOk').classList.toggle('danger', danger);
  document.getElementById('confirmModal').classList.remove('hidden');

  document.getElementById('confirmOk').onclick = () => {
    document.getElementById('confirmModal').classList.add('hidden');
    onOk();
  };
  document.getElementById('confirmCancel').onclick = () => {
    document.getElementById('confirmModal').classList.add('hidden');
    if (onCancel) onCancel();
  };
}

// Close modal when clicking the backdrop
document.addEventListener('click', e => {
  const modal = document.getElementById('confirmModal');
  if (e.target === modal) {
    document.getElementById('confirmCancel').click();
  }
});

// ============================================================
// SCORE HISTORY  (M2)
// ============================================================
const HISTORY_KEY = 'sccHistory';

function saveScore(pct, correct, total) {
  let history = [];
  try { history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch (e) {}

  history.unshift({
    date:        new Date().toISOString(),
    mode:        lastMode,
    subjectIdx:  lastSubject,
    name:        lastSubject >= 0 ? SUBJECTS[lastSubject].name : 'สุ่มข้ามวิชา',
    icon:        lastSubject >= 0 ? SUBJECTS[lastSubject].icon : '🎲',
    correct, total, pct
  });
  if (history.length > 10) history = history.slice(0, 10);

  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); } catch (e) {}
}

function renderHistory() {
  let history = [];
  try { history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch (e) {}

  const section = document.getElementById('historySection');
  if (history.length === 0) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');

  document.getElementById('historyList').innerHTML = history.slice(0, 5).map(h => {
    const modeLabel = h.mode === 'cross'  ? '🎲 สุ่มข้ามวิชา' :
                      h.mode === 'random' ? '🎲 ' + h.name     :
                      h.icon + ' ' + h.name;
    const d = new Date(h.date);
    const dateStr = d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })
                  + ' ' + d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
    return `<div class="history-item">
      <div>
        <div class="history-name">${modeLabel}</div>
        <div class="history-sub">${h.correct}/${h.total} ข้อ · ${dateStr}</div>
      </div>
      <div class="history-pct ${h.pct >= 70 ? 'pass' : 'fail'}">${h.pct}%</div>
    </div>`;
  }).join('');
}

function clearHistory() {
  showConfirm('ลบประวัติ', 'ลบประวัติการทดสอบทั้งหมด?', () => {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  }, 'ลบทั้งหมด', 'ยกเลิก', null, true);
}

// ============================================================
// REVIEW MODE  (M3)
// ============================================================
function startReview() {
  reviewMode  = true;
  reviewItems = questions
    .map((q, i) => ({ q, ua: userAnswers[i], origIdx: i }))
    .filter(x => x.ua !== null && x.ua !== x.q.a);
  reviewCur   = 0;

  document.getElementById('quizSubjectLabel').textContent = '📖 ทบทวนข้อผิด';
  document.getElementById('backBtn').textContent = '← กลับผลลัพธ์';
  showScreen('quizScreen');
  renderReviewQ();
}

function renderReviewQ() {
  const total = reviewItems.length;
  const item  = reviewItems[reviewCur];
  const q     = item.q;
  const ua    = item.ua;

  document.getElementById('progressFill').style.width    = ((reviewCur + 1) / total * 100) + '%';
  document.getElementById('progressText').textContent    = (reviewCur + 1) + ' / ' + total + ' ข้อผิด';
  document.getElementById('qCounter').textContent        = 'ข้อผิดที่ ' + (reviewCur + 1) + '/' + total;
  document.getElementById('qNum').textContent            = 'ข้อที่ ' + (item.origIdx + 1);

  const tag = document.getElementById('qSubjectTag');
  tag.textContent = isCrossMode ? SUBJECTS[q.subjectIdx].icon + ' ' + SUBJECTS[q.subjectIdx].name : '';

  document.getElementById('qText').textContent = q.q;

  const opts = document.getElementById('qOptions');
  opts.innerHTML = '';
  q.o.forEach((text, i) => {
    const b = document.createElement('button');
    b.className = 'opt-btn';
    b.innerHTML = '<span class="opt-letter">' + L[i] + '.</span><span>' + text + '</span>';
    b.disabled = true;
    if (i === q.a)  b.classList.add('correct');
    else if (i === ua) b.classList.add('wrong');
    opts.appendChild(b);
  });

  const fb = document.getElementById('qFeedback');
  fb.className  = 'feedback show bad';
  fb.textContent = '✗ คุณตอบ: ' + L[ua] + '. ' + q.o[ua];

  document.getElementById('prevBtn').style.visibility   = reviewCur === 0         ? 'hidden' : 'visible';
  document.getElementById('nextBtn').style.visibility   = reviewCur === total - 1 ? 'hidden' : 'visible';
  document.getElementById('submitBtn').style.display    = 'none';

  renderReviewNav();
}

function renderReviewNav() {
  const nav = document.getElementById('qNav');
  nav.innerHTML = '';
  reviewItems.forEach((item, i) => {
    const b = document.createElement('button');
    b.className = 'q-dot wrong-dot';
    b.textContent = item.origIdx + 1;
    if (i === reviewCur) b.classList.add('cur');
    b.addEventListener('click', () => { reviewCur = i; renderReviewQ(); });
    nav.appendChild(b);
  });
  const curDot = nav.querySelector('.q-dot.cur');
  if (curDot) curDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
}

// ============================================================
// SESSION PROGRESS  (M4)
// ============================================================
const PROGRESS_KEY = 'sccProgress';

function saveProgress() {
  if (submitted || questions.length === 0) return;
  try {
    sessionStorage.setItem(PROGRESS_KEY, JSON.stringify({
      questions, userAnswers, cur,
      mode, selSubject, isCrossMode,
      lastMode, lastSubject, lastCount
    }));
  } catch (e) {}
}

function loadProgress() {
  try {
    const raw = sessionStorage.getItem(PROGRESS_KEY);
    if (!raw) return false;
    const s = JSON.parse(raw);
    questions   = s.questions;   userAnswers = s.userAnswers; cur        = s.cur;
    mode        = s.mode;        selSubject  = s.selSubject;  isCrossMode = s.isCrossMode;
    lastMode    = s.lastMode;    lastSubject = s.lastSubject;  lastCount   = s.lastCount;
    submitted   = false;
    return true;
  } catch (e) { return false; }
}

function clearProgress() {
  sessionStorage.removeItem(PROGRESS_KEY);
}

// ============================================================
// KEYBOARD NAVIGATION  (M1)
// ============================================================
document.addEventListener('keydown', e => {
  // Don't fire when modal is open
  if (!document.getElementById('confirmModal').classList.contains('hidden')) return;
  // Only active on quiz screen
  if (!document.getElementById('quizScreen').classList.contains('active')) return;

  if (e.key === 'ArrowLeft')  { e.preventDefault(); navigate(-1); return; }
  if (e.key === 'ArrowRight') { e.preventDefault(); navigate(1);  return; }

  // 1–4 to pick answer (quiz only, not review)
  if (!submitted && !reviewMode && ['1','2','3','4'].includes(e.key)) {
    e.preventDefault();
    const idx = parseInt(e.key) - 1;
    if (idx < questions[cur].o.length) pick(idx);
  }
});
