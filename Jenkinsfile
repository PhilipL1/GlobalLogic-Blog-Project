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
        stage('Unit test'){
            steps{
                 sh '''
                 npm run test jest
                 '''
                }
            }  
        stage('UI test'){
            parallel{
                stage('run cypress'){
                    steps {
                        timeout(4){

                        }
                        sh '''
                        sleep 15
                        npm run cypress
                        '''
                    }
                } 
                stage('Build'){
                    steps {
                        timeout(2){
                            script{
                                try{
                                sh '''
                                'npm start'
                                '''
                            } catch (Throwable e) {
                                currentBuild.result = 'Success'
                                }
                            }
                        }
                    } 
                }
            }
        } 
    }
}