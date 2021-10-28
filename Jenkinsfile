pipeline{
    agent any
    stages{
        stage('setUp'){
            steps{
                sh '''
                npm install 
                '''
            }
        }
        stage('UI test'){
            parallel{
                stage('start server'){
                    steps {
                        sh '''
                        npm start
                        '''
                    }
                } 
                stage('run cypress'){
                    steps {
                        sh '''
                       sleep 10
                        npm run cypress
                        '''
                    }
                } 
            }
        }
        stage('Build'){
            steps{
                 sh '''
                 npm run devStart
                 '''
            }
        }
        stage('Unit test'){
            steps{
                 sh '''
                 npm run test jest
                 '''
            }
        }
    }    
}