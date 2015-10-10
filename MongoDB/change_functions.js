// Tom code to change type

```db.profiles.find({'details.dev_total_hours': {$type: 2}}).limit(3).forEach(
    function (x) {
        x.details.dev_total_hours=parseFloat(x.details.dev_total_hours);
        db.profiles.save(x);}
    );```

```db.profiles.find({'details.dev_total_hours': {$type: 2}}).forEach(
        function (result) {
            result.details.dev_total_hours=parseFloat(result.details.dev_total_hours);
            db.profiles.save(result);}
        );```

// Sample code to change type

        function replaceByValue( field, oldvalue, newvalue ) {
            for( var k = 0; k < json.length; ++k ) {
                if( oldvalue == json[k][field] ) {
                    json[k][field] = newvalue ;
                }
            }
            return json;
        }

// Change type


db.profiles_phl.$cond


cond({ $cond: { if: "$details.skills.skill", then: true, else: false } })


db.temp.find({name: {$exists:true}}).forEach( function(x) {
    db.temp.update({_id: x._id}, {$set: {name: x.name.toString()}});
});
