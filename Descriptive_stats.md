
#MongoChef

## Profiles located in the Philippines = 168363

 * ```db.profiles_phl.count()```

 * ```db.profiles.find({"details.dev_country": "Philippines" }).count()```

## Profile Job Assignment Details

### Profiles with *either* Total Hours > 0 *or* Billed Assignments > 0 *or* Hourly Assignment Details *or* Fixed Assignment Details = **43180**
\\\ Profiles converted from strings

`db.profiles_phl.find({ $or: [ { "details.dev_billed_assignments": { $gt: 0.0 } }, { "details.dev_total_hours": { $gt: 0.0 } }, { "details.assignments.fp.job": { $exists: true } }, { "details.assignments.hr.job": { $exists: true } } ] }).count()`


### Profiles with *either* Total Hours > 0 *or* Billed Assignments > 0 *or* Hourly Assignment Details *or* Fixed Assignment Details = **43163**

* ```db.profiles_phl.find { $or: [ { "details.dev_total_hours": { $gt: 0.0 } }, { "details.dev_billed_assignments": { $gt: "0" } }, { "details.assignments.hr.job": { $exists: true } }, { "details.assignments.fp.job": { $exists: true } } ] }```

* ```db.profiles_phl.find {
						{ $or: [ { "details.dev_total_hours": { $gt: 0.0 } }
	  		 				   , { "details.dev_billed_assignments": { $gt: 0.0 } }
	  		 				   , { "details.assignments.hr.job": { $exists: true } }
	  		 				   , { "details.assignments.fp.job": { $exists: true } } ] }
}.count()```

* NB: for "details.assignments.fp" or "details.assignments.hr": { $exists: true } ~ use { $exists: true } or { $type: 3 }*

 * Profiles with *either* Total Hours > 0 *or* Billed Assignments > 0 = **43161**
  * ```db.profiles_phl.find( { $or: [ { "details.dev_total_hours": { $gt: 0.0 } }, { "details.dev_billed_assignments": { $gt: "0" } } ] } ).count()```


 * Profiles *with* Total Hours > 0 = **30040**
  * ```db.profiles_phl.find( { "details.dev_total_hours": { $gt: 0.0 } } ).count()```


 * Profiles *with* Billed Assignments = **43098**
  * ```db.profiles_phl.find( { "details.dev_billed_assignments": { $gt: "0" } } ).count()```
  * ```db.profiles.find({ "details.dev_billed_assignments": { $gt: "0" }, "details.dev_country": "Philippines" }).count()```




#### Profiles *with* Assignment Details *or* Total Hours > 0 *with no* Billed Assignments = **65**

 * ```db.profiles_phl_ad.find( { "details.dev_billed_assignments": "0" } ).count()```


 * Profiles *with* Total Hours > 0 *and no* Billed Assignments  = **63**
  * ```db.profiles_phl.find( { "details.dev_total_hours": { $gt: 0.0 }, "details.dev_billed_assignments": "0" } ).count()```


 * Profiles *with* Assignment Details *and no* Total Hours *and no* Billed Assignments = **2**
  * ```db.profiles_phl_ad.find( { "details.dev_billed_assignments": "0", "details.dev_total_hours": 0.0 } ).count()```


### Profiles with *either no* Total Hours *or no* Billed Assignments *or no* Hourly Assignment Details *or no* Fixed Assignment Details  = **125265** ~ actual: **125200**

 * ```db.profiles_phl.find({$or: [ { "details.dev_total_hours": "0.0" }, { "details.dev_billed_assignments": "0" }, { "details.assignments.hr.job": "" }, { "details.assignments.fp.job": "" } ] } ).count()```

 * ```db.profiles_phl.find( { "details.dev_billed_assignments": { $lt: "1" } }).count()```

 * ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_billed_assignments": { $lt: "1" } }).count()```

 *NB: The original number includes **Profiles with Assignment Details or Total Hours > 0 with no Billed Assignments = 65***


### Profiles *with* Assignment Details = **42379**

 * ```db.profiles_phl.find( { $or: [ { "details.assignments.fp.job": { $exists: true } }, { "details.assignments.hr.job": { $exists: true } } ] } ).count()```

#### Profiles *with* Billed Assignments *and* Total Hours > 0 *with no* Assignment Details = **784**

 * ```db.profiles_phl_ad.find( { "details.assignments.fp": "", "details.assignments.hr": "" } ).count()```

#### Profiles *with* Fixed Assignments = **26246**
  * db.profiles_phl.find( { "details.assignments.fp": { $type: 3 } } ).count()
  * db.profiles_phl_ad.find( { "details.assignments.fp": { $type: 3 } } ).count()

#### Profiles *with* Hourly Assignments = **33828**
 * ```db.profiles_phl.find( { "details.assignments.hr.job": { $exists: true } } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.hr.job": { $exists: true } } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.hr": { $type: 3 } } ).count()```

#### Profiles *with only* Fixed Jobs = **8551**
 * ```db.profiles_phl.find( { "details.assignments.fp.job": { $exists: true }, "details.assignments.hr": "" } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.fp.job": { $exists: true }, "details.assignments.hr": "" } ).count()```

#### Profiles *with only* Hourly Jobs = **16133**
 * ```db.profiles_phl.find( { "details.assignments.hr.job": { $exists: true }, "details.assignments.fp": "" } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.hr.job": { $exists: true }, "details.assignments.fp": "" } ).count()```

### Profiles *with* Assignments Currently Open = **20506**

 * ```db.profiles_phl.find( { $or: [ { "details.assignments.fp.job.as_to_full": "Present" }, { "details.assignments.hr.job.as_to_full": "Present" } ] } ).count()```
 * ```db.profiles_phl_ad.find( { $or: [ { "details.assignments.fp.job.as_to_full": "Present" }, { "details.assignments.hr.job.as_to_full": "Present" } ] } ).count()```

#### Profiles *with* Fixed Jobs Currently Open = **6844**

 * ```db.profiles_phl.find( { "details.assignments.fp.job.as_to_full": "Present" } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.fp.job.as_to_full": "Present" } ).count()```

#### Profiles *with* Hourly Jobs Currently Open = **17245**

 * ```db.profiles_phl.find( { "details.assignments.hr.job.as_to_full": "Present" } ).count()```
 * ```db.profiles_phl_ad.find( { "details.assignments.hr.job.as_to_full": "Present" } ).count()```

#### Profiles *with* Hourly *and* Fixed Jobs Currently Open = **3583**
 * ```db.profiles_phl.find( { "details.assignments.fp.job.as_to_full": "Present", "details.assignments.hr.job.as_to_full": "Present" } ).count()```


### Profiles *with different* Billed Assignments & Assignment Counts = ***8693***
 * ``` db.profiles_phl_working.find({ "assignments_listed_billed_delta": { $gt: 0.0 } }).count() ```


 \\ last active in 3 months

 db.profiles_phl_working.find({ "date_first_worked": { $gt: ISODate("2006-01-02T14:00:00.000+0000") }, "date_last_worked": { $gte: ISODate("2015-06-02T14:00:00.000+0000"), $lt: ISODate("2016-01-02T14:00:00.000+0000") } }).count() **9563**

\\ worked with details and have first date **34401**

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_first_worked": { $gte: ISODate("2006-01-02T14:00:00.000+0000"), $lt: ISODate("2007-01-02T14:00:00.000+0000") } }).count()

\\ worked, with details, have first date and contract still open **1891**

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "details.assignments.fp.job.as_to_full": ISODate("2015-09-30T14:00:00.000+0000"), "details.assignments.hr.job.as_to_full": ISODate("2015-09-30T14:00:00.000+0000") }).count()

\\ profiles with both fp and hr jobs still open **3583**

db.profiles_phl_working.find({  "details.assignments.fp.job.as_to_full": ISODate("2015-09-30T14:00:00.000+0000"), "details.assignments.hr.job.as_to_full": ISODate("2015-09-30T14:00:00.000+0000") }).count()

\\ profiles with either fp or hr jobs open ****

db.profiles_phl_working.find({ $or:[ {"details.assignments.fp.job.as_to_full": ISODate("2015-09-30T14:00:00.000+0000"), "details.assignments.hr.job.as_to_full": ISODate("2015-09-30T14:00:00.000+0000")}] } ).count()

### Profiles with full details and open assignments **14008**

db.profiles_phl_working.find({ "worked_on_platform": true, "assignments_listed_billed_delta": 0.0, "date_last_worked": ISODate("2015-09-30T14:00:00.000+0000") }).count()

### Profiles without full details and open assignments **6498**
db.profiles_phl_working.find({ "worked_on_platform": true, "assignments_listed_billed_delta": { $ne: 0.0 }, "date_last_worked": ISODate("2015-09-30T14:00:00.000+0000") }).count()

### Profiles with Billed Assignemnts delta = 0, Worked

db.profiles_phl_working.find({ "worked_on_platform": true, "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "details.assignments.hr.job.as_financial_privacy": { $ne: "1" }, "details.assignments.fp.job.as_financial_privacy": { $ne: "1" } }).count()


### Attrition

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2006-01-02T14:00:00.000+0000"), $lt: ISODate("2007-01-02T14:00:00.000+0000") } }).count()

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2007-01-02T14:00:00.000+0000"), $lt: ISODate("2008-01-02T14:00:00.000+0000") } }).count()

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2008-01-02T14:00:00.000+0000"), $lt: ISODate("2009-01-02T14:00:00.000+0000") } }).count()

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2009-01-02T14:00:00.000+0000"), $lt: ISODate("2010-01-02T14:00:00.000+0000") } }).count()

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2010-01-02T14:00:00.000+0000"), $lt: ISODate("2011-01-02T14:00:00.000+0000") } }).count()

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2011-01-02T14:00:00.000+0000"), $lt: ISODate("2012-01-02T14:00:00.000+0000") } }).count()

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2012-01-02T14:00:00.000+0000"), $lt: ISODate("2013-01-02T14:00:00.000+0000") } }).count()

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2013-01-02T14:00:00.000+0000"), $lt: ISODate("2014-01-02T14:00:00.000+0000") } }).count()

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2014-01-02T14:00:00.000+0000"), $lt: ISODate("2015-01-02T14:00:00.000+0000") } }).count()

db.profiles_phl_working.find({ "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "worked_on_platform": true, "date_last_worked": { $gte: ISODate("2015-01-02T14:00:00.000+0000"), $lt: ISODate("2016-01-02T14:00:00.000+0000") } }).count()


## Income

\\ Assignments with full working history

db.profiles_phl_working.find({ "worked_on_platform": true, "assignments_listed_billed_delta": 0.0, "date_first_worked": { $type: 9 }, "details.assignments.hr.job.as_financial_privacy": { $ne: "1" }, "details.assignments.fp.job.as_financial_privacy": { $ne: "1" } }).count() **30425**


> cor(profiles_income, use = "everything")
                     billed_assignments assignments_fp_count assignments_hr_count total_hours length_active income_fp income_hr income_total
billed_assignments               1.0000              0.88893               0.7735     0.31745       0.41561   0.51199    0.3430       0.4286
assignments_fp_count             0.8889              1.00000               0.3973     0.07179       0.26946   0.54105    0.1154       0.2189
assignments_hr_count             0.7735              0.39726               1.0000     0.53669       0.45983   0.27711    0.5274       0.5558
total_hours                      0.3174              0.07179               0.5367     1.00000       0.37627   0.08612    0.8136       0.7882
length_active                    0.4156              0.26946               0.4598     0.37627       1.00000   0.21822    0.3314       0.3582
income_fp                        0.5120              0.54105               0.2771     0.08612       0.21822   1.00000    0.1603       0.3543
income_hr                        0.3430              0.11542               0.5274     0.81359       0.33144   0.16035    1.0000       0.9798
income_total                     0.4286              0.21886               0.5558     0.78822       0.35817   0.35432    0.9798       1.0000
daily_rate                       0.1016              0.04074               0.1471     0.28792      -0.02058   0.12789    0.3708       0.3771
annual_every_day                 0.1016              0.04074               0.1471     0.28792      -0.02058   0.12789    0.3708       0.3771
annual_261                       0.1016              0.04074               0.1471     0.28792      -0.02058   0.12789    0.3708       0.3771
annual_activity                  0.4156              0.26946               0.4598     0.37627       1.00000   0.21822    0.3314       0.3582
                     daily_rate annual_every_day annual_261 annual_activity
billed_assignments      0.10156          0.10156    0.10156         0.41561
assignments_fp_count    0.04074          0.04074    0.04074         0.26946
assignments_hr_count    0.14710          0.14710    0.14710         0.45983
total_hours             0.28792          0.28792    0.28792         0.37627
length_active          -0.02058         -0.02058   -0.02058         1.00000
income_fp               0.12789          0.12789    0.12789         0.21822
income_hr               0.37076          0.37076    0.37076         0.33144
income_total            0.37713          0.37713    0.37713         0.35817
daily_rate              1.00000          1.00000    1.00000        -0.02058
annual_every_day        1.00000          1.00000    1.00000        -0.02058
annual_261              1.00000          1.00000    1.00000        -0.02058
annual_activity        -0.02058         -0.02058   -0.02058         1.00000
>
billed_assignments assignments_fp_count assignments_hr_count  total_hours length_active   income_fp    income_hr income_total
nbr.val             30425.00000          30425.00000          30425.00000    30425.000     30425.000   30425.000    30425.000    30425.000
nbr.null                0.00000          12631.00000           7769.00000     8201.000         0.000   12633.000     7772.000        5.000
nbr.na                  0.00000              0.00000              0.00000        0.000         0.000       0.000        0.000        0.000
min                     1.00000              0.00000              0.00000        0.000         1.000       0.000        0.000        0.000
max                   442.00000            409.00000            226.00000    27556.833      3125.000   61506.000   211355.410   216774.820
range                 441.00000            409.00000            226.00000    27556.833      3124.000   61506.000   211355.410   216774.820
sum                184149.00000          86944.00000          97205.00000 12662646.167  15620640.000 8267428.500 54410903.253 62678331.753
median                  2.00000              1.00000              1.00000       25.167       240.000       5.000       81.550      175.010
mean                    6.05256              2.85765              3.19491      416.192       513.415     271.731     1788.362     2060.093
SE.mean                 0.07863              0.05431              0.03924        6.906         3.476       7.969       37.297       39.369
CI.mean.0.95            0.15412              0.10644              0.07692       13.537         6.813      15.619       73.104       77.165
var                   188.10863             89.72990             46.85939  1451167.522    367575.998 1931988.356 42324013.356 47155920.616
std.dev                13.71527              9.47259              6.84539     1204.644       606.280    1389.960     6505.691     6867.017
coef.var                2.26603              3.31482              2.14260        2.894         1.181       5.115        3.638        3.333
  daily_rate annual_every_day   annual_261 annual_activity
nbr.val       30425.00000        30425.000    30425.000    30425.000000
nbr.null          5.00000            5.000        5.000        0.000000
nbr.na            0.00000            0.000        0.000        0.000000
min               0.00000            0.000        0.000        0.002740
max            1000.00000       365000.000   261000.000        8.561644
range          1000.00000       365000.000   261000.000        8.558904
sum          131246.77918     47905074.402 34255409.367    42796.273972
median            1.26595          462.071      330.412        0.657534
mean              4.31378         1574.530     1125.897        1.406615
SE.mean           0.07107           25.941       18.549        0.009523
CI.mean.0.95      0.13930           50.845       36.358        0.018665
var             153.67800     20473751.820 10468699.176        2.759062
std.dev          12.39669         4524.793     3235.537        1.661042
coef.var          2.87374            2.874        2.874        1.180879



> stat.desc(profiles_income$income_total)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
   30425.000        5.000        0.000        0.000   216774.820   216774.820 62678331.753      175.010     2060.093       39.369       77.165
         var      std.dev     coef.var
47155920.616     6867.017        3.333


> stat.desc(profiles_income$daily_rate)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
 30425.00000      5.00000      0.00000      0.00000   1000.00000   1000.00000 131246.77918      1.26595      4.31378      0.07107      0.13930
         var      std.dev     coef.var
   153.67800     12.39669      2.87374


> stat.desc(profiles_income$annual_activity)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
30425.000000     0.000000     0.000000     0.002740     8.561644     8.558904 42796.273972     0.657534     1.406615     0.009523     0.018665
         var      std.dev     coef.var
    2.759062     1.661042     1.180879


    > stat.desc(profiles_income$length_active)
         nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
       30425.000        0.000        0.000        1.000     3125.000     3124.000 15620640.000      240.000      513.415        3.476        6.813
             var      std.dev     coef.var
      367575.998      606.280        1.181
    > t.test(profiles_income$length_active, alternative = c("greater"), mu = 365, paired = FALSE)

    	One Sample t-test

    data:  profiles_income$length_active
    t = 43, df = 30000, p-value <0.0000000000000002
    alternative hypothesis: true mean is greater than 365
    95 percent confidence interval:
     507.7   Inf
    sample estimates:
    mean of x
        513.4

        > t.test(profiles_income$length_active, alternative = c("greater"), mu = 547.5, paired = FALSE)

        	One Sample t-test

        data:  profiles_income$length_active
        t = -9.8, df = 30000, p-value = 1
        alternative hypothesis: true mean is greater than 547.5
        95 percent confidence interval:
         507.7   Inf
        sample estimates:
        mean of x
            513.4

        > t.test(profiles_income$length_active, alternative = c("greater"), mu = 456.25, paired = FALSE)

        	One Sample t-test

        data:  profiles_income$length_active
        t = 16, df = 30000, p-value <0.0000000000000002
        alternative hypothesis: true mean is greater than 456.2
        95 percent confidence interval:
         507.7   Inf
        sample estimates:
        mean of x
            513.4


\\Daily Rates

> stat.desc(profiles_income$daily_rate)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
 30425.00000      5.00000      0.00000      0.00000   1000.00000   1000.00000 131246.77918      1.26595      4.31378      0.07107      0.13930
         var      std.dev     coef.var
   153.67800     12.39669      2.87374

> t.test(profiles_income$daily_rate, alternative = c("greater"), mu = 9.39, paired = FALSE)

	One Sample t-test

data:  profiles_income$daily_rate
t = -71, df = 30000, p-value = 1
alternative hypothesis: true mean is greater than 9.39
95 percent confidence interval:
 4.197   Inf
sample estimates:
mean of x
    4.314

> t.test(profiles_income$daily_rate, alternative = c("greater"), mu = 6.41, paired = FALSE)

	One Sample t-test

data:  profiles_income$daily_rate
t = -29, df = 30000, p-value = 1
alternative hypothesis: true mean is greater than 6.41
95 percent confidence interval:
 4.197   Inf
sample estimates:
mean of x
    4.314


\\ All Profile Income

> stat.desc(profiles_income$income_total)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
   30425.000        5.000        0.000        0.000   216774.820   216774.820 62678331.753      175.010     2060.093       39.369       77.165
         var      std.dev     coef.var
47155920.616     6867.017        3.333 


\\ All Assignments

> stat.desc(all_charge$total_charge)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
    439169.0          0.0          0.0          1.0     178942.2     178941.2  202538163.4         51.1        461.2          3.3          6.5
         var      std.dev     coef.var
   4891563.6       2211.7          4.8

> describe(jobs$total_charge)
  vars      n mean   sd median trimmed mad min    max  range skew kurtosis  se
1    1 452142  448 2181     50     107  64   0 178942 178942   19      708 3.2

> stat.desc(jobs$total_charge)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
    452142.0      12973.0          0.0          0.0     178942.2     178942.2  202538163.4         50.0        448.0          3.2          6.4
         var      std.dev     coef.var
   4757140.5       2181.1          4.9

    **daily_rate**

    > stat.desc(all_charge$daily_rate)
      nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
 439169.00000       0.00000       0.00000       0.00059   95906.43000   95906.42941 3232235.93880       2.26797       7.35989       0.22636
 CI.mean.0.95           var       std.dev      coef.var
      0.44365   22501.80627     150.00602      20.38155




\\ FP Assignments

db.jobs_phl_all.find({ "total_charge": { $gt: 0.0 }, "type": "Fixed", "cal_start_date": { $gte: ISODate("2015-01-02T14:00:00.000+0000"), $lt: ISODate("2016-01-02T14:00:00.000+0000") } }).count() ****

> stat.desc(fp_charge$total_charge)

    nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
   178760.0          0.0          0.0          1.0      33937.9      33936.9   19045888.8         30.0        106.5          1.1          2.2
        var      std.dev     coef.var
   220275.1        469.3          4.4

   **daily_rate**

   > stat.desc(fp_charge$daily_rate)
         nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
    178760.00000       0.00000       0.00000       0.00059    4901.00000    4900.99941 1289412.54930       2.25806       7.21309       0.06964
    CI.mean.0.95           var       std.dev      coef.var
         0.13648     866.82388      29.44187       4.08173


\\ HR Assignments    

> stat.desc(hr_charge$total_charge)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
    260409.0          0.0          0.0          1.0     178942.2     178941.2  183492274.6         85.3        704.6          5.5         10.8
         var      std.dev     coef.var
   7952620.5       2820.0          4.0

   **daily_rate**

   > stat.desc(hr_charge$daily_rate)
         nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
    260409.00000       0.00000       0.00000       0.00068   95906.43000   95906.42932 1942823.38950       2.27897       7.46066       0.37874
    CI.mean.0.95           var       std.dev      coef.var
         0.74231   37353.36160     193.27018      25.90523

  **hourly_rate**

  > stat.desc(hr_charge$hourly_rate)
       nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
   255902.0000       0.0000    4507.0000       0.0099   31744.9412   31744.9313 1732523.5025       4.4400       6.7703       0.1424       0.2792
           var      std.dev     coef.var
     5191.7661      72.0539      10.6427


## Education - all

### Education listed ***121784***
 * ``` db.profiles_phl_working.find({ "education_listed_count": { $gt: 0 } }).count ```

### Have tertiary education ***98221***

  * ```db.profiles_phl_working.find({ $or: [ { "education_diploma": true }, { "education_bachelors": true }, { "education_masters": true }, { "education_doctor": true } ] }).count()```


### Diploma ***5180***
   * ``` db.profiles_phl_working.find({ "education_diploma": true }).count() ```

### Bachelors ***92261***
  * ``` db.profiles_phl_working.find({ "education_bachelors": true }).count() ```

### Masters ***6866***
 * ``` db.profiles_phl_working.find({ "education_masters": true }).count() ```

### Doctorate / PhD ***806***
 * ``` db.profiles_phl_working.find({ "education_doctor": true }).count() ```


## Education - worked

### Education listed ***37825***
  * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_listed_count": { $gt: 0 } }).count ```

### Have tertiary education ***33231***

 * ```db.profiles_phl_working.find({ "worked_on_platform": true, $or: [ { "education_diploma": true }, { "education_bachelors": true }, { "education_masters": true }, { "education_doctor": true } ] }).count()```

### Diploma ***3763***
    * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_diploma": true }).count() ```

### Bachelors ***30229***
   * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_bachelors": true }).count() ```

### Masters ***2407***
  * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_masters": true }).count() ```

### Doctorate / PhD ***314***
  * ``` db.profiles_phl_working.find({ "worked_on_platform": true, "education_doctor": true }).count() ```


## Experience ***112770***
  * ```db.profiles_phl_working.find({ "experiences_count": { $gt: 0 } }).count() ```

### experience All

\\ length

> stat.desc(experience_count_all$experience_length)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
168363.00000  55593.00000      0.00000      0.00000     65.78904     65.78904 832288.38357      3.74795      4.94342      0.01366      0.02678
         var      std.dev     coef.var
    31.42331      5.60565      1.13396


\\ count
> summary(experience$experiences_count)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
   0.00    0.00    1.00    1.66    2.00   94.00

   > sum(experience$experiences_count)
   [1] 279549

             > experience_years_all <- read.csv("id_experience_all.csv", header = TRUE, sep = ",")
             > stat.desc(experience_count_all$experiences_count)
                   nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
             168363.000000  55593.000000      0.000000      0.000000     94.000000     94.000000 279549.000000      1.000000      1.660395      0.004881
              CI.mean.0.95           var       std.dev      coef.var
                  0.009566      4.010664      2.002664      1.206138


### experience worked
\\ count

  > summary(worked$experiences_count)
     Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
    0.000   1.000   2.000   2.638   4.000  94.000

    > sum(worked$experiences_count)
    [1] 113916

    > experience_count_worked <- read.csv("id_experience_worked.csv", header = TRUE, sep = ",")
    > stat.desc(experience_count_worked$experiences_count)
         nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
       43180.000     4556.000        0.000        0.000       94.000       94.000   113916.000        2.000        2.638        0.012        0.023
             var      std.dev     coef.var
           6.019        2.453        0.930


\\ length

  > summary(worked$experience_length)  // incorrect does not take into account 0 records
     Min. 1st Qu.  Median    Mean 3rd Qu.    Max.    NA's
    0.164   4.833   7.419   8.491  10.590  54.530    4556

    > summary(worked$experience_length)
       Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
      0.000   4.000   6.748   7.595  10.170  54.530

      > stat.desc(experience_count_worked$experience_length)
           nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
         43180.000     4556.000        0.000        0.000       54.534       54.534   327969.882        6.748        7.595        0.027        0.054
               var      std.dev     coef.var
            32.341        5.687        0.749

### experience not_worked
> summary(not_worked$experiences_count)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
  0.000   0.000   1.000   1.323   2.000  51.000

  > sum(not_worked$experiences_count)
  [1] 165633

      > summary(not_worked$experience_length)
         Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
        0.000   0.000   2.499   4.029   6.334  65.790

        > experience_count_not_worked <- read.csv("id_experience_not_worked.csv", header = TRUE, sep = ",")
        > stat.desc(experience_count_not_worked$experience_length)
       nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
  116574.00000  42429.00000      0.00000      0.00000     62.78630     62.78630 504252.71233      2.91233      4.32560      0.01566      0.03069
           var      std.dev     coef.var
      28.58114      5.34613      1.23593

        > stat.desc(experience_count_not_worked$experiences_length)
        Error in `[.data.frame`(x, i) : undefined columns selected
        > stat.desc(experience_count_not_worked$experiences_count)
        nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
  116574.000000  42429.000000      0.000000      0.000000     51.000000     51.000000 165632.000000      1.000000      1.420831      0.005029
   CI.mean.0.95           var       std.dev      coef.var
       0.009856      2.947825      1.716923      1.208393


## Tests

### Without tests
 * ``` db.profiles_phl_working.find({ "tests_listed": false }).count()``` ***58981***

### With tests
 * ``` db.profiles_phl_working.find({ "tests_listed": true }).count() ``` ***109382***

 > summary(tests_worked$tests_count)
    Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
   0.000   2.000   4.000   4.505   6.000  67.000

   > summary(tests_not_worked$tests_count)
      Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
     0.000   0.000   1.000   1.367   2.000  41.000

     > summary(tests_all$tests_count)
        Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
       0.000   0.000   1.000   2.172   3.000  67.000


       > tests_count_all <- read.csv("id_tests_count_all.csv", header = TRUE, sep = ",")
       > stat.desc(tests_count_all$tests_count)
            nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
        168363.0000   58981.0000       0.0000       0.0000      67.0000      67.0000  365701.0000       1.0000       2.1721       0.0068       0.0133
                var      std.dev     coef.var
             7.7903       2.7911       1.2850
       > tests_count_worked <- read.csv("id_tests_count_worked.csv", header = TRUE, sep = ",")
       > stat.desc(tests_count_worked$tests_count)
            nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
          43180.000     2977.000        0.000        0.000       67.000       67.000   194527.000        4.000        4.505        0.017        0.034
                var      std.dev     coef.var
             13.011        3.607        0.801
       > tests_count_not_worked <- read.csv("id_tests_count_not_worked.csv", header = TRUE, sep = ",")
       > stat.desc(tests_count_not_worked$tests_count)
            nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
        125183.0000   56004.0000       0.0000       0.0000      41.0000      41.0000  171174.0000       1.0000       1.3674       0.0053       0.0103
                var      std.dev     coef.var
             3.4645       1.8613       1.3612



## Assignment Ranges

#### Billed Assignments

profileId     billed_assignments
~01000041c74fe756d6:    1   Min.   :   1.00   
~0100033173e447046e:    1   1st Qu.:   1.00   
~0100043d2e3730a28f:    1   Median :   3.00   
~010005e5e8e1fbe433:    1   Mean   :  11.33   
~01000917619b8c9a18:    1   3rd Qu.:  10.00   
~010009616ea791b5bb:    1   Max.   :1031.00   
(Other)            :43092      

\\ all profiles
vars      n mean sd median trimmed mad min  max range skew kurtosis   se
1    1 168363  2.9 14      0    0.36   0   0 1031  1031   17      594 0.03

> summary(profiles$billed_assignments)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
    0.0     0.0     0.0     2.9     1.0  1030.0

      > stat.desc(profiles$billed_assignments)
           nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
      168363.00000 125265.00000      0.00000      0.00000   1031.00000   1031.00000 488175.00000      0.00000      2.89954      0.03483      0.06826
               var      std.dev     coef.var
         204.19665     14.28974      4.92828


         	One Sample t-test

         data:  profiles$billed_assignments
         t = 83, df = 170000, p-value <0.0000000000000002
         alternative hypothesis: true mean is greater than 0
         95 percent confidence interval:
          2.842   Inf
         sample estimates:
         mean of x
               2.9

\\ Profiles with details
> stat.desc(billed_assignments_file$billed_assignments)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
    43098.00         0.00         0.00         1.00      1031.00      1030.00    488175.00         3.00        11.33         0.13         0.25
         var      std.dev     coef.var
      702.25        26.50         2.34


db.profiles_phl_working.find({ "billed_assignments": { $gt: 0.0, $lte: 37.8 } }).count() **39994**


#### Profiles with 0 <= billed assignments <= 10 = 7386
 * `db.profiles_phl.find ({ "details.dev_billed_assignments": { $gt: "0", $lte: "10" } }).count()`
 * `db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gt: "0", $lte: "10" } }).count()`

#### Profiles with 11 <= billed assignments <= 20 = **10690**

`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "11", $lte: "20" } }).count()`


#### Profiles with 21 <= billed assignments <= 30 = **5754**


`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "21", $lte: "30" } }).count()`


#### Profiles with 31 <= billed assignments <= 40 = **3631**


`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "31", $lte: "40" } }).count()``

#### Profiles with 41 <= billed assignments <= 50 = **2564**

`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "51", $lte: "60" } }).count()``

`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "31", $lte: "40" } }).count()``

#### Profiles with 51 <= billed assignments <= 60 = **1901**

`db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "41", $lte: "50" } }).count()``


#### Profiles with 61 <= billed assignments <= 70 = **1475**

db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "61", $lte: "70" } }).count()``

#### Profiles with 71 <= billed assignments <= 80 = **1301**

db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "71", $lte: "80" } }).count()``

#### Profiles with 81 <= billed assignments <= 90 = **1038**

db.profiles_phl_ad.find ({ "details.dev_billed_assignments": { $gte: "81", $lte: "90" } }).count()``


## Days
options(scipen=100)
options(digits=2)


\\ All

> stat.desc(days_closed)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
   325590.00         0.00         0.00         1.00      2535.00      2534.00  28803810.00        21.00        88.47         0.29         0.58
         var      std.dev     coef.var
    28136.12       167.74         1.90

    > summary(days_closed)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
      1       6      21      88      96    2540

\\ Hourly

> stat.desc(days_closed_hr)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
   177539.00         0.00         0.00         1.00      2535.00      2534.00  18969780.00        39.00       106.85         0.43         0.84
         var      std.dev     coef.var
    32318.58       179.77         1.68

    > summary(days_closed_hr)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
      1       9      39     107     120    2540


\\ Fixed
> stat.desc(days_closed_fp)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
   148051.00         0.00         0.00         1.00      2330.00      2329.00   9834030.00        10.00        66.42         0.39         0.76
         var      std.dev     coef.var
    22229.70       149.10         2.24

    > summary(days_closed_fp)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
      1       4      10      66      43    2330


\\ t-test H0 = 30 conf.int = 0.95

_All_


> t.test(days_closed, alternative = c("greater"), mu = 30, paired = FALSE)

	One Sample t-test

data:  days_closed
t = 200, df = 300000, p-value <0.0000000000000002
alternative hypothesis: true mean is greater than 30
95 percent confidence interval:
  88 Inf
sample estimates:
mean of x
       88

       > t.test(days_closed, alternative = c("less"), mu = 30, paired = FALSE)

       	One Sample t-test

       data:  days_closed
       t = 200, df = 300000, p-value = 1
       alternative hypothesis: true mean is less than 30
       95 percent confidence interval:
        -Inf   89
       sample estimates:
       mean of x
              88

              > t.test(days_closed, alternative = c("greater"), mu = 90, paired = FALSE)

              	One Sample t-test

              data:  days_closed
              t = -5, df = 300000, p-value = 1
              alternative hypothesis: true mean is greater than 90
              95 percent confidence interval:
                88 Inf
              sample estimates:
              mean of x
                     88

_Hourly_

> t.test(days_closed_hr, alternative = c("greater"), mu = 30, paired = FALSE)

	One Sample t-test

data:  days_closed_hr
t = 200, df = 200000, p-value <0.0000000000000002
alternative hypothesis: true mean is greater than 30
95 percent confidence interval:
 106 Inf
sample estimates:
mean of x
      107
      > t.test(days_closed_hr, alternative = c("less"), mu = 30, paired = FALSE)

      	One Sample t-test

      data:  days_closed_hr
      t = 200, df = 200000, p-value = 1
      alternative hypothesis: true mean is less than 30
      95 percent confidence interval:
       -Inf  108
      sample estimates:
      mean of x
            107

            > t.test(days_closed_hr, alternative = c("greater"), mu = 90, paired = FALSE)

            	One Sample t-test

            data:  days_closed_hr
            t = 40, df = 200000, p-value <0.0000000000000002
            alternative hypothesis: true mean is greater than 90
            95 percent confidence interval:
             106 Inf
            sample estimates:
            mean of x
                  107

                  > t.test(days_closed_hr, alternative = c("greater"), mu = 180, paired = FALSE)

                    	One Sample t-test

                    data:  days_closed_hr
                    t = -200, df = 200000, p-value = 1
                    alternative hypothesis: true mean is greater than 180
                    95 percent confidence interval:
                     106 Inf
                    sample estimates:
                    mean of x
                          107


_Fixed_

> t.test(days_closed_fp, alternative = c("greater"), mu = 30, paired = FALSE)

	One Sample t-test

data:  days_closed_fp
t = 90, df = 100000, p-value <0.0000000000000002
alternative hypothesis: true mean is greater than 30
95 percent confidence interval:
  66 Inf
sample estimates:
mean of x
       66
       > t.test(days_closed_fp, alternative = c("less"), mu = 30, paired = FALSE)

       	One Sample t-test

       data:  days_closed_fp
       t = 90, df = 100000, p-value = 1
       alternative hypothesis: true mean is less than 30
       95 percent confidence interval:
        -Inf   67
       sample estimates:
       mean of x
              66

              > t.test(days_closed_fp, alternative = c("greater"), mu = 90, paired = FALSE)

              	One Sample t-test

              data:  days_closed_fp
              t = -60, df = 100000, p-value = 1
              alternative hypothesis: true mean is greater than 90
              95 percent confidence interval:
                66 Inf
              sample estimates:
              mean of x
                     66



## Total Hours


> stat.desc(hours_closed)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
    177539.0       3416.0          0.0          0.0      16254.0      16254.0   21895137.0         15.0        123.3          1.0          2.0
         var      std.dev     coef.var
    189504.8        435.3          3.5

    > summary(hours_closed)
       Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
          0       4      15     123      61   16300

\ Not outliers

> stat.desc(hours_closed_outliers)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
    177537.0       3416.0          0.0          0.0      12690.0      12690.0   21864796.0         15.0        123.2          1.0          2.0
         var      std.dev     coef.var
    186943.0        432.4          3.5
> summary(hours_closed_outliers)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
      0       4      15     123      61   12700


\ No outliers and no zero Jobs

> stat.desc(hours_closed_rev)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
   174121.00         0.00         0.00         0.17     12690.00     12689.83  21864795.97        16.00       125.57         1.05         2.05
         var      std.dev     coef.var
   190307.15       436.24         3.47
> summary(hours_closed_rev)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
      0       5      16     126      63   12700


      > t.test(hours_closed_rev, alternative = c("less"), mu = 160, paired = FALSE)

      	One Sample t-test

      data:  hours_closed_rev
      t = -30, df = 200000, p-value <0.0000000000000002
      alternative hypothesis: true mean is less than 160
      95 percent confidence interval:
       -Inf  127
      sample estimates:
      mean of x
            126


            One Sample t-test

data:  hours_closed_rev
t = -30, df = 200000, p-value = 1
alternative hypothesis: true mean is greater than 160
95 percent confidence interval:
124 Inf
sample estimates:
mean of x
    126


## Intensity

> stat.desc(intensity_closed_rev)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
174123.00000      0.00000      0.00000      0.00029   8005.00000   8004.99971 313095.91250      0.66500      1.79813      0.06071      0.11898
         var      std.dev     coef.var
   641.70494     25.33190     14.08791

> summary(intensity_closed_rev)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
      0       0       1       2       2    8000


\\ REvised

> stat.desc(intensity_rev)
     nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
173711.00000      0.00000      0.00000      0.00029     24.00000     23.99971 248778.11693      0.65909      1.43214      0.00480      0.00940
         var      std.dev     coef.var
     3.99847      1.99962      1.39625
> summary(intensity_rev)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
    0.0     0.2     0.7     1.4     1.9    24.0


    > t.test(intensity_rev, alternative = c("less"), mu = 5.7, paired = FALSE)

    	One Sample t-test

    data:  intensity_rev
    t = -900, df = 200000, p-value <0.0000000000000002
    alternative hypothesis: true mean is less than 5.7
    95 percent confidence interval:
     -Inf  1.4
    sample estimates:
    mean of x
          1.4



## Job Categories

#### Profiles with Job Categories = 158730

 query ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_job_categories_v2.dev_job_categories_v": {$exists: true}}).count()```

#### Profiles without Job Categories = 9633

 query ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_job_categories_v2.dev_job_categories_v": {$exists: false}}).count()```

   * Profiles without job categories WITH billed assignmennts = 913
     * Query ran: ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_job_categories_v2.dev_job_categories_v": {$exists: false}, "details.dev_billed_assignments": { $gt: "0" }}).count()```

\\ All
     > stat.desc(profiles$categories_group_count)
           nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
     168363.000000   9633.000000      0.000000      0.000000     10.000000     10.000000 428308.000000      2.000000      2.543956      0.003838
      CI.mean.0.95           var       std.dev      coef.var
          0.007523      2.480105      1.574835      0.619050


          > stat.desc(profiles$categories_subgroup_count)
                nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
          168363.000000   9633.000000      0.000000      0.000000     38.000000     38.000000 904258.000000      5.000000      5.370883      0.007992
           CI.mean.0.95           var       std.dev      coef.var
               0.015663     10.752438      3.279091      0.610531

\\ Worked
               > stat.desc(categories_worked$categories_group_count)
                     nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
                43180.000000    916.000000      0.000000      0.000000     10.000000     10.000000 131701.000000      3.000000      3.050046      0.006905
                CI.mean.0.95           var       std.dev      coef.var
                    0.013533      2.058613      1.434787      0.470415
               > stat.desc(categories_worked$categories_subgroup_count)
                    nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
                43180.00000    916.00000      0.00000      0.00000     38.00000     38.00000 301912.00000      8.00000      6.99194      0.01372      0.02689
                        var      std.dev     coef.var
                    8.12713      2.85081      0.40773

\\ Not Worked
               > categories_not_worked <- read.csv("id_cat_sub_not_worked.csv", header = TRUE, sep = ",")
               > stat.desc(categories_not_worked$categories_group_count)
                     nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
               125183.000000   8717.000000      0.000000      0.000000     10.000000     10.000000 296607.000000      2.000000      2.369387      0.004475
                CI.mean.0.95           var       std.dev      coef.var
                    0.008771      2.506688      1.583252      0.668212
               > stat.desc(categories_not_worked$categories_subgroup_count)
                     nbr.val      nbr.null        nbr.na           min           max         range           sum        median          mean       SE.mean
               125183.000000   8717.000000      0.000000      0.000000     24.000000     24.000000 602346.000000      4.000000      4.811724      0.009132
                CI.mean.0.95           var       std.dev      coef.var
                    0.017898     10.438973      3.230940      0.671472


## Job titles

 * ` db.jobs_phl_all.count() ` ***452142***

\\ Work History term frequency

 > head(frequency)
representative       customer        service      assistant        support        manager
         32957          29980          28918          20749          17283          15779

\\ Job title term frequency

         > job_titles <- jobs$job_title
         > review_job_titles <- paste(job_titles, collapse)
         Error in paste(job_titles, collapse) :
           cannot coerce type 'closure' to vector of type 'character'
         > review_job_titles <- paste(jobs$job_title, collapse = "")
         > library("tm", lib.loc="/Library/Frameworks/R.framework/Versions/3.2/Resources/library")
         Loading required package: NLP

         Attaching package: ‘NLP’

         The following object is masked from ‘package:ggplot2’:

             annotate

         > review_source <- VectorSource(review_job_titles)
         > all_job_titles <- tm_map(all_job_titles, content_transformer(tolower))
         Error in tm_map(all_job_titles, content_transformer(tolower)) :
           object 'all_job_titles' not found
         > all_job_titles <- Corpus(review_source)
         > all_job_titles <- tm_map(all_job_titles, content_transformer(tolower))
         > all_job_titles <- tm_map(all_job_titles, removePunctuation)
         > all_job_titles <- tm_map(all_job_titles, stripWhitespace)
         > all_job_titles <- tm_map(all_job_titles, removeWords, stopwords (kind = "en")  )
         > job_titles_dtm <- DocumentTermMatrix(all_job_titles)
         > job_titles_dtm2 <- as.matrix(job_titles_dtm)
         > job_titles_frequency <- colSums(dtm2)
         Error in is.data.frame(x) : object 'dtm2' not found
         > job_titles_frequency <- colSums(job_titles_dtm2)
         > job_titles_frequency <- sort(job_titles_frequency, decreasing = TRUE)
         > head(job_titles_frequency)
              data     entry  research assistant    needed       web
             21838     20323     13236     12284     11182      9515

\\ Experience Titles

worked db.experience_titles_worked.count() **113916**
db.experience_titles_all.count() **279549**


## Skills
\\ Worked
         > stat.desc(skills_count_worked)
              nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
            43180.000     4615.000        0.000        0.000       94.000       94.000   257573.000        5.000        5.965        0.024        0.047
                  var      std.dev     coef.var
               25.290        5.029        0.843
         > summary(skills_count_worked)
            Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
               0       2       5       6       9      94

\\ Not Worked
         > stat.desc(skills_count_not_worked)
              nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
          125183.0000   43132.0000       0.0000       0.0000      54.0000      54.0000  386094.0000       2.0000       3.0842       0.0097       0.0190
                  var      std.dev     coef.var
              11.7026       3.4209       1.1092
         > summary(skills_count_not_worked)
            Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
               0       0       2       3       5      54





\\ Test for difference
               > t.test(skills_count_worked, skills_count_not_worked, var.equal = FALSE)

	Welch Two Sample t-test

data:  skills_count_worked and skills_count_not_worked
t = 100, df = 60000, p-value <0.0000000000000002
alternative hypothesis: true difference in means is not equal to 0
95 percent confidence interval:
2.8 2.9
sample estimates:
mean of x mean of y
     6.0       3.1

 > t.test(skills_count_worked, skills_count_not_worked, alternative = c("greater"), var.equal = FALSE)

 	Welch Two Sample t-test

 data:  skills_count_worked and skills_count_not_worked
 t = 100, df = 60000, p-value <0.0000000000000002
 alternative hypothesis: true difference in means is greater than 0
 95 percent confidence interval:
  2.8 Inf
 sample estimates:
 mean of x mean of y
       6.0       3.1

           > kruskal.test(skills_count$skills_count ~ skills_count$worked_on_platform)

           	Kruskal-Wallis rank sum test

           data:  skills_count$skills_count by skills_count$worked_on_platform
           Kruskal-Wallis chi-squared = 20000, df = 1, p-value <0.0000000000000002


           > skills.aov <- aov(profiles$skills ~ profiles$worked_on_platform)
           > anova(skills.aov)
           Analysis of Variance Table

           Response: profiles$skills
                                           Df  Sum Sq Mean Sq F value              Pr(>F)    
           profiles$worked_on_platform      1  266457  266457   17545 <0.0000000000000002 ***
           Residuals                   168361 2556967      15                                
           ---
           Signif. codes:  0 ‘* * * three stars’ 0.001 ‘ * two stars *  ’ 0.01 ‘* one star ’ 0.05 ‘.’ 0.1 ‘ ’ 1
           > TukeyHSD(skills.aov)
             Tukey multiple comparisons of means
               95% family-wise confidence level

           Fit: aov(formula = profiles$skills ~ profiles$worked_on_platform)

           $`profiles$worked_on_platform`
                       diff   lwr   upr p adj
           true-false 2.881 2.838 2.923     0


\\ Simple Regression

> skills_simple.lm = lm(skills ~ worked_on_platform)
> skills_simple.lm

Call:
lm(formula = skills ~ worked_on_platform)

Coefficients:
           (Intercept)  worked_on_platformtrue  
                  3.08                    2.88  


                  > summary(skills.lm)

                  Call:
                  lm(formula = skills ~ worked_on_platform + categories_group_count +
                      categories_subgroup_count + tests_count + education_tertiary +
                      experiences_count + experience_years)

                  Residuals:
                     Min     1Q Median     3Q    Max
                  -35.64  -2.23  -0.91   1.91  85.09

                  Coefficients:
                                            Estimate Std. Error t value            Pr(>|t|)    
                  (Intercept)                0.94666    0.01958    48.4 <0.0000000000000002 ***
                  worked_on_platformtrue     0.88539    0.02345    37.8 <0.0000000000000002 ***
                  categories_group_count    -0.31495    0.01023   -30.8 <0.0000000000000002 ***
                  categories_subgroup_count  0.28239    0.00509    55.4 <0.0000000000000002 ***
                  tests_count                0.25355    0.00380    66.7 <0.0000000000000002 ***
                  education_tertiarytrue     1.45403    0.01932    75.3 <0.0000000000000002 ***
                  experiences_count          0.41470    0.00570    72.8 <0.0000000000000002 ***
                  experience_years          -0.03108    0.00203   -15.3 <0.0000000000000002 ***
                  ---
                  Signif. codes:  0 ***    0.001 **     0.01 *    0.05 '.'    0.1 ‘ ’ 1     

                  Residual standard error: 3.5 on 168355 degrees of freedom
                  Multiple R-squared:  0.246,	Adjusted R-squared:  0.246
                  F-statistic: 7.87e+03 on 7 and 168355 DF,  p-value: <0.0000000000000002                



### JOb title word search

db.jobs_phl_all.find({ $text: { $search: "\"data entry\"" } } ).count() **33009**

db.jobs_phl_all.find({ $text: { $search: "\"virtual assistant\"" } } ).count() **13098** + **5542**  (va)

db.jobs_phl_all.find({ $text: { $search: "\"personal assistant\"" } } ).count() **4392** + **546** (pa)

db.jobs_phl_all.find({ $text: { $search: "write writer" } } ).count() **36939**

db.jobs_phl_all.find({ $text: { $search: "admin adminstration adminstrator" } } ).count() **5851**

-------------------------------

#### Profiles without Blurbs = 9603

query ```db.profiles.find({ "details.dev_country": "Philippines", "details.dev_blurb": "" }).count()```


## Portraits

### Profiles *without* Portraits = **18064**
* `db.profiles_phl.find( {"details.dev_portrait": ""} ).count()`

### Profiles *with* Assignments and without Portraits = **2300**

db.profiles_phl_ad.find( {"details.dev_portrait": ""} ).count()


### Profiles * with* Portraits = 43163

db.profiles_phl_ad.find( { $or: [ { "details.dev_portrait": { $exists: "true" } }, { "details.dev_portrait_32": { $exists: "true" } }, { "details.dev_portrait_100": { $exists: "true" } }, { "details.dev_portrait_50": { $exists: "true" } } ] } ).count()

## Profile Accessibility

#### Profiles Open to oDesk Users only (?) = 168363

    query ``db.profiles.find({ "details.dev_country": "Philippines" },{"details.dev_ui_profile_access": "oDesk Users only"}).count()```

#### Public Profiles (?) = 138679

    query ```db.profiles_phl.find(  { "details.dev_ui_profile_access": "Public" } ).count()```

    query ``db.profiles.find({ "details.dev_country": "Philippines", "details.dev_ui_profile_access": "Public"}).count()```

    , categoires_subgroup_count: {$cond: {if: { $eq: [ "$categoriess_listed_array", true ] }, then: { $size: "$details.dev_job_categories_v2.dev_job_categories_v" }, else:
       { $cond: {if: {$eq: ["$categories_listed", true ] }, then: 1, else: 0 } } } }
