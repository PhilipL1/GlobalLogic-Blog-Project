pipeline
{
    agent any 

    options{
        timestamps()
        disableConcurrentBuilds()
    }
    stages{
        stage("What's-UP"){
            steps{
                sh  '''
                echo "hello"
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