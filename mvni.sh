#!/usr/bin/bash

function scpLogback() {

    echo ${ARGS}
    SOURCE=/home/ceki/logback-site/target/site

    pushd $SOURCE
    #i=0;
    for FILE in ${ARGS} 
    do
        echo "FILE=$FILE"
        echo "scp $FILE fran1.qos.ch:/var/www/logback.qos.ch/htdocs/$FILE";
        scp $FILE fran1.qos.ch:/var/www/logback.qos.ch/htdocs/$FILE;
        #i=$((i + 1));
    done
    popd
}

function doRsync() {
    #    ssh root@ge.qos.ch "rsync -r -p -z -l --exclude=log/ --delete rsync://yvo.qos.ch/www/logback.qos.ch /var/www"
    echo 'ssh root@exo1.qos.ch "rsync -r -p -z -l --exclude=log/ --delete rsync://fran1.qos.ch/www/logback.qos.ch /var/www'
    ssh root@exo1.qos.ch "rsync -r -p -z -l --exclude=log/ --delete rsync://fran1.qos.ch/www/logback.qos.ch /var/www"    
}


ARGS="${@}"

#echo "a0=${0}"
#echo "a1=${1}"
#echo "a2=${2}"
echo "ARGS=${ARGS}"

echo "This is triggered command. Triggered by ${ARGS}"

echo "JAVA_HOME=$JAVA_HOME"
echo "MAVEN_HOME=${MAVEN_HOME}"  #=/java/maven-3.5.2/


MVN_COMMAND=${MAVEN_HOME}/bin/mvn

pushd ~/logback-site

echo "======================" 
${MVN_COMMAND} install
scpLogback;
doRsync;

popd

exit



