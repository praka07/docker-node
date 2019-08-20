node {
   stage('check out from git'){
       git credentialsId: '222a2c4b-d3ae-4967-82e7-5b1985cae479', url: 'git@github.com:praka07/docker-node.git'
       
   }
    stage('build docker image'){
       sh 'docker build -t prakash .'
   }
   stage('run image'){
       def runImage='docker run -p 4040:4040 -d prakash'
       sh "${runImage}"
   }
}
