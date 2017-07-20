node {
   def commit_id
   stage('Checkout') {
     git 'https://github.com/experiencedevops/selfserviceapp'
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
     echo commit_id
   }
   stage('Build') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'pwd'
       sh 'npm install'
       sh 'npm run build-prod'
     }
   }
   stage('Docker Build/Push') {
     docker.withRegistry('https://index.docker.io/v1/', 'GitHub') {
       def app = docker.build("experiencedevops/selfserviceapp:latest", '.').push()
     }
   }
}
