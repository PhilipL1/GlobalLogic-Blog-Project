pipeline{
    agent any
    stages{
        stage('setUp'){
            steps{
                sh "./setUp"
            }
        }
    }
    stages{
        stage('UI test'){
            steps{
                 sh "./UI-test"
            }
        }
    }
    stages{
        stage('Unit test'){
            steps{
                 sh "./Unit-test"
            }
        }
    }
    stages{
        stage('Build'){
            steps{
                 sh "./Build"
            }
        }
    }
}