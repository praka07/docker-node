node {
   stage('check out from git'){
      checkout scm
       
   }
    stage('build docker image'){
       sh 'docker build -t prakash .'
   }
   stage('Run containter on unix server'){
       def runImage='docker run -p 4040:4040 -d --name prakash-containter prakash'
       sh "${runImage}"
   }
}
