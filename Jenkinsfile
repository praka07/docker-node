node {
   stage('pull latest code'){
    // git credentialsId: '222a2c4b-d3ae-4967-82e7-5b1985cae479', url: 'git@github.com:praka07/docker-node.git'
      checkout scm
     }
    stage('build docker image'){
       sh 'docker build -t prakash .'
   }
   stage('remove if container already exist'){
      sh 'docker stop prakash-container || true && docker rm prakash-container || true'
   }
   stage('Run containter on unix server'){
       def runImage='docker run --rm -p 4040:4040 -d --name prakash-container prakash'
       sh "${runImage}"
   }
}
