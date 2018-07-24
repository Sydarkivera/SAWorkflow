#!/bin/sh

/droid.sh -a $1 -p /profile.droid >/dev/null
/droid.sh -p /profile.droid -e /result.csv >/dev/null

while IFS="," read f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12 f13 f14 f15 f16 f17 f18
do
        echo "File: $f3"
        echo "Mimetype: $f16, name: $f17"
        echo "Missmatch: $f12"
done < /result.csv


#cat /result.csv
rm result.csv >/dev/null
rm profile.droid >/dev/null
