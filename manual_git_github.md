# Manual configurar Github por SSH
Hecho por Mateo Sáez Álvarez
## Instalación de la clave SSH en Github

    1.- Hacemos las comprobaciones previas para tener instalado git, node y github.
    2.- Obtenemos las claves públicas y privadas con el siguiente comando, ssh-keygen -t, añadiendo una combinación y nuestro correo de Github
```bash
    ssh-keygen -t ed25519 -C "matthewexboy369@gmail.com"
```
![imagen comando ssh](/img/imagen1.png)
    3.- Hacemos un cat de la clave pública y copiamos el texto que nos genera para luego copiarlo en el apartado de añadir claves SSH en Github
```bash
    cat ~/.ssh/id_ed25519.pub
```
![imagen cat ssh](/img/imagen2.png)
## Añadir la clave a Agent
    1.- Ahora vamos a PowerShell para levantar el agente ssh con los comandos "Get-Service ssh-agent | Set-Service -StartupType Automatic"
```bash
    Get-Service ssh-agent | Set-Service -StartupType Automatic
```
![imagen primer comando powershell](/img/imagen3.png)
    2.- Luego usamos el comando "Start-Service ssh-agent"
```bash
    Start-Service ssh-agent
```
![imagen segundo comando powershell](/img/imagen4.png)
    3.- Finalmente añadimos la clave privada a git con "ssh-add C:\Users\matth\.ssh\id_ed25519" (la terminación cambia dependiendo de la persona)
```bash
    ssh-add C:\Users\matth\.ssh\id_ed25519
```
![imagen tercer comando powershell](/img/imagen5.png)
## Verificar la clave
    1.- De vuelta en Git Bash, usamos el comando "ssh -T git@github.com" para establecer la conexión SSH
```bash
    ssh -T git@github.com
```
![imagen conexión de git con la cuenta de Github](/img/imagen6.png)
    2.- Por último, enlazamos el repositorio local con el que está en la nube con este comando: 
```bash
    git remote add origin git@github.com:MateoSaezAlvarez/Curso_25_26_m.git
```
![imagen enlace del repositorio local con el remoto](/img/imagen7.png)
3.- Vamos a Github para comprobar que tenemos nuestra clave SSH: 
![imagen clave SSH en Github](/img/imagen8.png)