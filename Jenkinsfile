pipeline {
        agent {
                docker {
                        image: 'node:current-slim'
                        args: '-p 3000:3000'
                }
        }
        stages {
                stage('Install node modules'){
                        sh "npm install"
                }
                stage('Build'){
                        sh "npm run build"
                }
        }
}
