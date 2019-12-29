
$name = "home"

Write-Host "1. Build"
Write-Host "2. Push"
Write-Host "3. Build + Push"

$selection = Read-Host -Prompt "Choose"

switch ($selection)
{
    1 {docker buildx build -t mijabr/mijabr-${name}:arm -f Dockerfile.arm --platform linux/arm .}
    2 {docker push mijabr/mijabr-${name}:arm}
    3 {docker buildx build -t mijabr/mijabr-${name}:arm -f Dockerfile.arm --platform linux/arm .; docker push mijabr/mijabr-${name}:arm}
}
