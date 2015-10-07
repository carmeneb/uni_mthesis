####Profiles with Jobs Billed no Job Assignment Details = 722

Query: ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_billed_assignments": { $gt:"0" }, "details.assignments.hr": "", $and: [ { "details.assignments.fp": "" } ]}).count()```


#### No Feedback
* details.assignments.hr.job.26
* details.assignments.hr.job.29
* details.assignments.hr.job.30
* details.assignments.hr.job.32
* details.assignments.hr.job.49
* details.assignments.hr.job.51
* details.assignments.hr.job.53


#### Profiles without "Permalink" = 162903

```db.profiles.find({"details.dev_country": "Philippines", "details.permalink": "" }).count()```

details.permalink https://www.upwork.com/users/~0162b7c87e61ef969b
