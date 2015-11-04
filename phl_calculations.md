#### New Contract Growth

db.profiles_phl_working.find({ "worked_on_platform": true, "assignments_listed_billed_delta": 0.0 , "date_first_worked": { $type: 9 }, "date_first_worked": { $gte: ISODate("2006-01-02T14:00:00.000+0000"), $lt: ISODate("2007-01-02T14:00:00.000+0000") }  }).count()

#### New Contracts

` db.jobs_phl_all.find({ "cal_start_date": { $gte: ISODate("2006-01-02T14:00:00.000+0000"), $lt: ISODate("2007-01-02T14:00:00.000+0000") } }).count()`

#### New Hourly Contracts

` db.jobs_phl_all.find({ "type": "Hourly", "cal_start_date": { $gte: ISODate("2015-01-02T14:00:00.000+0000"), $lt: ISODate("2016-01-02T14:00:00.000+0000") } }).count() `

#### New Fixed Price Contracts

` db.jobs_phl_all.find({ "type": "Fixed", "cal_start_date": { $gte: ISODate("2015-01-02T14:00:00.000+0000"), $lt: ISODate("2016-01-02T14:00:00.000+0000") } }).count() `

#### Open Contracts

` db.jobs_phl_all.find({ "ongoing": true }).count() `
` db.jobs_phl_all.find({ "ongoing": true, "type": "Fixed" }).count() `
` db.jobs_phl_all.find({ "ongoing": true, "type": "Hourly" }).count() `
` db.jobs_phl_all.find({ "ongoing": true, "type": "Fixed", "cal_start_date": { $gte: ISODate("2015-01-02T14:00:00.000+0000"), $lt: ISODate("2016-01-02T14:00:00.000+0000") } }).count() `
` db.jobs_phl_all.find({ "ongoing": true, "type": "Hourly", "cal_start_date": { $gte: ISODate("2015-01-02T14:00:00.000+0000"), $lt: ISODate("2016-01-02T14:00:00.000+0000") } }).count() `

#### Profiles with Open Contracts

` db.profiles_phl_working.find({ $or: [ { "assignments_hr_end_dates": ISODate("2015-09-30T14:00:00.000+0000") }, { "assignments_fp_end_dates": ISODate("2015-09-30T14:00:00.000+0000") } ] } ).count() `


#### Income



#### Attrition

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2006-01-02T14:00:00.000+0000"), $lt: ISODate("2007-01-02T14:00:00.000+0000") } }).count()

\\ calcluated on last date active ~ not used

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $gt: ISODate("2006-01-02T14:00:00.000+0000") }, "date_last_worked": { $gte: ISODate("2015-01-01T14:00:00.000+0000"), $lt: ISODate("2015-09-02T14:00:00.000+0000") } }).count()

\\ last active in 3 months ~ not used

db.profiles_phl_working.find({ "date_first_worked": { $gt: ISODate("2006-01-02T14:00:00.000+0000") }, "date_last_worked": { $gte: ISODate("2015-06-02T14:00:00.000+0000"), $lt: ISODate("2016-01-02T14:00:00.000+0000") } }).count()

~ did not use

All profiles ` db.id_contract_last_date_filtered.find({ "finish_date": { $gte: ISODate("2006-01-02T14:00:00.000+0000"), $lt: ISODate("2007-01-02T14:00:00.000+0000") } } ).count() `

Profiles with full history ` db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, $or: [ { "assignments_hr_end_dates": ISODate("2015-09-30T14:00:00.000+0000") }, { "assignments_fp_end_dates": ISODate("2015-09-30T14:00:00.000+0000") }  ] }).count() `

db.profiles_phl_working.find({ "date_first_worked": { $gt: ISODate("2006-01-02T14:00:00.000+0000") }, "date_last_worked": { $gte: ISODate("2015-01-02T14:00:00.000+0000"), $lt: ISODate("2007-01-02T14:00:00.000+0000") } }).count()


#### Experience listed
All ` db.profiles_phl_working.find({ "experiences_count": { $gt: 0 } }).count() `
Worked ` db.profiles_phl_working.find({ "worked_on_platform": true, "experiences_listed": true }).count()  `
Not Worked ` db.profiles_phl_working.find({ "worked_on_platform": false, "experiences_listed": true }).count()  `

#### Experience Years

experience_years: { $cond: { if: { "experience_length": { $gt: 0.0, $lte: 1.0 } } , then: "$details.skills.skill.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }

### CAtegories - not listed but working
` db.profiles_phl_working.find({ "worked_on_platform": true, "categories_listed": false, $or: [ { "details.assignments.hr.job.as_to_full": ISODate("2015-09-30T14:00:00.000+0000") }, { "details.assignments.fp.job.as_to_full": ISODate("2015-09-30T14:00:00.000+0000") } ] }).count()  `

#### Tests

`db.profiles_phl_working.find({ "worked_on_platform": false, "tests_listed": false }).count()`

#### Job titles

` db.jobs_phl_all.count() `

db.experience_titles_worked.count()

### Frequent Term search

All Job Titles ` db.jobs_phl_all.find({ $text: { $search: "data entry research assistant web" } } ).count() `

Experience Job Titles ` db.experience_titles_all.find({ $text: { $search: "representative customer service assistant support manager " } } ).count() `
                      ` db.experience_titles_worked.find({ $text: { $search: "representative customer service assistant support manager " } } ).count() `


### Complex / Professional Term Search

All Job Titles ` db.jobs_phl_all.find({ $text: { $search: "Accounting Accounts Bookkeeping" } } ).count() `

Experience Job Titles ` db.experience_titles_all.find( { $text: { $search:  "Accounting Bookkeeping Accounts"    } } ).count() `
                      ` db.experience_titles_worked.find( { $text: { $search:  "Accounting Bookkeeping Accounts"    } } ).count()`

\\ Search Terms

Accounting	    "Accounting Bookkeeping Accounts"
Legal	          "Legal Law  Contract Lawyer"
Finance	        "Finance Banking"  
                "\"Financial Services \""
Engineer	      "Engineering Engineer CAD"
                "\"Product Design\""
                "\"3D Modeling \""
Architecture    "Architecture Architect"
Human Resources	"Recruitment Training"  
                "\"Change Management\""  
                "\"Human Resources\""
IT	            "\"IT & Networking\""  
                "\"Database Adminstration\""  
                "\"ERP Software\""
                "\"CRM Software \""
                "\"Information Security \""
                "\"Network Adminstration\""
                "\"System Adminstration\""
                "\"Network & System Administrations\""

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "Accounting Bookkeeping Accounts"    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "Legal Law  Contract Lawyer"    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "Finance Banking"    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"Financial Services \""    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "Engineering Engineer CAD"    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"Product Design\""   } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"3D Modeling \""   } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "Architecture Architect"    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "Recruitment Training"   } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"Change Management\""     } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"Human Resources\""    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"IT & Networking\""    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"Database Adminstration\""    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"ERP Software\""    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"CRM Software \""    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"Information Security \""    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"Network Adminstration\""    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"System Adminstration\""    } } ).count()

                db.jobs_phl_all.find( { "type": "Hourly", $text: { $search:  "\"Network & System Administrations\""    } } ).count()



                                db.experience_titles_all.find( { $text: { $search:  "Legal Law  Contract Lawyer"    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "Finance Banking"    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"Financial Services \""    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "Engineering Engineer CAD"    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"Product Design\""   } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"3D Modeling \""   } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "Architecture Architect"    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "Recruitment Training"   } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"Change Management\""     } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"Human Resources\""    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"IT & Networking\""    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"Database Adminstration\""    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"ERP Software\""    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"CRM Software \""    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"Information Security \""    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"Network Adminstration\""    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"System Adminstration\""    } } ).count()

                                db.experience_titles_all.find( { $text: { $search:  "\"Network & System Administrations\""    } } ).count()

db.experience_titles_all.find( { $text: { $search:  "strategy"    } } ).count()

db.experience_titles_all.find( { $text: { $search:  "Management Manager"pla    } } ).count()

db.experience_titles_all.find( { $text: { $search:  "Planning"    } } ).count()

db.experience_titles_all.find( { $text: { $search:  "Analysis Analytics"    } } ).count()

db.experience_titles_all.find( { $text: { $search:  "Consulting"   } } ).count()
