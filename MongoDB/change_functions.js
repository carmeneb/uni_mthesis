// Change string not in an array to double and save

db.profiles_phl_test.find({"details.dev_total_hours": {$type: 2}}).forEach(function(result) {
		result.details.dev_total_hours=parseFloat(result.details.dev_total_hours);
            db.profiles_phl_test.save(result);}
        )


// Change string not in an array to double with print type, print results and save

db..find({"details.dev_total_hours": {$type: 2}}).forEach(function(result) {
    result.details.dev_total_hours=parseFloat(result.details.dev_total_hours);
          print(typeof(result.details.dev_total_hours));
            print(result.details.dev_total_hours);
              db..save(result);}
                )

db.profiles_phl.find({"details.dev_total_hours": {$type: 2}}).forEach(function(result) {
		result.details.dev_total_hours=parseFloat(result.details.dev_total_hours);
          print(typeof(result.details.dev_total_hours));
            print(result.details.dev_total_hours);}
        )


// Change string in an array to double with prnt type, print results and save
/// Sudo Code
find(results we want).foreachresult loop {

  //// identify if result is an array of jobs or not
  if result is array of jobs then loop through array {
    for each job in array {
      ///// do this action
      convert string into double
    }
  } else if result is not array then {
      ///// do this action
      convert string into double
  }
}

/// Code executed

db.profiles_phl_test.find({"details.assignments.hr.job": {$exists:true}}).forEach(function(result) {
  print(result.details.dev_first_name);
  if ( Array.isArray(result.details.assignments.hr.job) ) {
    print("Jobs: " + result.details.assignments.hr.job.length);
    for(var i=0; i < result.details.assignments.hr.job.length; i++) {
      result.details.assignments.hr.job[i].as_total_hours=parseFloat(result.details.assignments.hr.job[i].as_total_hours);
      print("Job Number: " + i);
      print("Type: " + typeof(result.details.assignments.hr.job[i].as_total_hours));
      print("Hours: " + result.details.assignments.hr.job[i].as_total_hours);
    }
} else {
      result.details.assignments.hr.job.as_total_hours=parseFloat(result.details.assignments.hr.job.as_total_hours);
      print("Single Job");
      print("Type: " + typeof(result.details.assignments.hr.job.as_total_hours));
      print("Hours: " + result.details.assignments.hr.job.as_total_hours);
}
db.profiles_phl_test.save(result);
}
)







// Convert date range differential into days
assignment_length:
     { $divide:
       [ { $subtract:
           [ "$details.assignments.fp.job.as_to_full", "$details.assignments.fp.job.as_from_full" ] }, { $multiply: [ 1000, 60, 60, 24 ] } ] }



// Date fields converted from string to date
"details.assignments.hr.job.as_from_full" 02/19/2015
"details.assignments.hr.job.as_to_full" Present or 10/07/2013

"details.assignments.fp.job.as_from_full" 10/13/2012
"details.assignments.fp.job.as_to_full"  Present or 11/16/2012

"details.education.institution.ed_from" 04/2006
"details.education.institution.ed_to" Present or 04/2008

"details.experiences.experience.exp_from" 05/2005
"details.experiences.experience.exp_to" Present or 04/2007

"details.tsexams.tsexam.ts_when" 05/30/2012

"dev_last_worked_ts" 1443484800000

// String fields changed to double fields

"details.dev_bill_rate" 25
"details.dev_billed_assignments" 8
"details.dev_total_hours" 0

"details.assignments.hr.job.as_total_hours_precise" 0
"details.assignments.hr.job.as_total_hours" 0

"details.assignments.fp.job.as_total_hours_precise" 0
"details.assignments.fp.job.as_total_hours" 0

"details.assignments.fp.job.feedback.score" 5.00
"details.assignments.hp.job.feedback.score" 5.00

"details.dev_adj_score" 5
