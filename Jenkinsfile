pipeline {
        agent {
                docker {
                        image 'node:current-slim'
                        args '-p 3000:3000'
                }
        }
        stages {
                stage('Install node modules'){
                        steps {
                                sh "npm install"
                        }
                }
                stage('Build'){
                        steps {
                                sh "npm run build"
                        }
                }
        }
}
