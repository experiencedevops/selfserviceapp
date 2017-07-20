node {
   def commit_id
   stage('Preparation') {
     git 'https://github.com/experiencedevops/selfserviceapp'
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
     echo commit_id
   }
   stage('test') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'pwd'
       //sh 'npm install rxjs@5.0.1'
       //sh 'npm install zone.js@^0.8.4'
       //sh 'npm cache verify'
       sh 'npm install'
       sh 'npm run build-prod'
     }
   }
   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v1/', 'GitHub') {
       def app = docker.build("experiencedevops/selfserviceapp:latest", '.').push()
     }
   }
}
