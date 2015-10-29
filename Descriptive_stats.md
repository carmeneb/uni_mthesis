
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

  > summary(experience$experience_length) // incorrect does not take into account 0 records
     Min. 1st Qu.  Median    Mean 3rd Qu.    Max.    NA's
     0.08    3.66    6.08    7.38    9.42   65.79   55593

     > summary(experience$experience_length)
        Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
       0.000   0.000   3.748   4.943   7.586  65.790

       > stat.desc(experience_years)
            nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
         168363.000    55593.000        0.000        0.000       65.789       65.789   832288.384        3.748        4.943        0.014        0.027
                var      std.dev     coef.var
             31.423        5.606        1.134


\\ count
> summary(experience$experiences_count)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
   0.00    0.00    1.00    1.66    2.00   94.00

   > sum(experience$experiences_count)
   [1] 279549

             > experience_years_all <- read.csv("id_experience_all.csv", header = TRUE, sep = ",")
             > stat.desc(experience_years_all$experiences_count)
                  nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
              168363.0000   55593.0000       0.0000       0.0000      94.0000      94.0000  279549.0000       1.0000       1.6604       0.0049       0.0096
                      var      std.dev     coef.var
                   4.0107       2.0027       1.2061


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
        > stat.desc(experience_count_not_worked$experiences_count)
             nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
         125183.0000   51037.0000       0.0000       0.0000      51.0000      51.0000  165633.0000       1.0000       1.3231       0.0048       0.0094
                 var      std.dev     coef.var
              2.8744       1.6954       1.2814
        > stat.desc(experience_count_not_worked$experiences_length)
        Error in `[.data.frame`(x, i) : undefined columns selected
        > stat.desc(experience_count_not_worked$experience_length)
             nbr.val     nbr.null       nbr.na          min          max        range          sum       median         mean      SE.mean CI.mean.0.95
          125183.000    51037.000        0.000        0.000       65.789       65.789   504318.501        2.499        4.029        0.015        0.029
                 var      std.dev     coef.var
              27.844        5.277        1.310


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


## Job titles

 * ` db.jobs_phl_all.count() ` ***452142***

 > head(frequency)
representative       customer        service      assistant        support        manager
         32957          29980          28918          20749          17283          15779


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
