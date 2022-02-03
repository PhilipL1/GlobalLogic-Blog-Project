pipeline
{
    agent any 

    options{
        timestamps()
        disableConcurrentBuilds()
    }
    stages{
        stage('setUp'){
            steps{
                sh '''
                npm install 
                '''
            }
        }
        stage("Build my bloody APPPP"){
            steps{
                sh  '''
                npm start
                '''
            }
        }
    }
    post{
        cleanup{
            cleanWs()
        }
    }
}