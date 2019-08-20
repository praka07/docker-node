node {
   stage('check out from git'){
      checkout scm
       
   }
    stage('build docker image'){
       sh 'docker build -t prakash .'
   }
   stage('Run containter on unix server'){
       sh 'docker rm --force prakash-container'
       def runImage='docker run -p 4040:4040 -d --name prakash-container prakash'
       sh "${runImage}"
   }
}
