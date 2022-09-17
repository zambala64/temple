# 宮廟行銷 - 網站建置
## 水艸田享
科技 X 信仰，免費網站建置教學。

### 條件
- 一台電腦
- 連接網路

### 費用
- 主機 [DigitalOcean](https://digitalocean.com/) 免費
- 網址 [Gandi](https://www.gandi.net/zh-Hant) NTD600~1200/每年

### 帳號申請
- [Instagram / ig 帳號](https://www.instagram.com/)
- [Youtube 帳號](https://youtube.com/)
- [Facebook 帳號](https://facebook.com/)
- [elfsight.com 帳號](https://apps.elfsight.com/sign-up/)
- [Github 帳號](https://pages.github.com/)
- [DigitalOcean 帳號](https://cloud.digitalocean.com/registrations/new)

### 軟體安裝
#### 01. 文件編輯器：下載 [Visual Studio Code](https://code.visualstudio.com/download)
- 安裝教學 [Mac 安裝](https://www.youtube.com/watch?v=V0umtTqyvyE)
- 安裝教學 [Windows 安裝](https://www.youtube.com/watch?v=ivgCJ1XmNMM)


#### 02. 版本管理 / Git：
##### 02-A: Windows 安裝教學 [Windows 安裝](https://git-scm.com/download/win)

##### 02-B: Mac 安裝教學 [Mac 安裝](https://docs.microsoft.com/zh-tw/devops/develop/git/install-and-set-up-git)
01. 先安裝 [Homebrew](https://brew.sh/) 後，在 Mac 電腦，打開 Terminal 指令視窗 ，輸入下面指令。
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
02. 安裝 Homebrew 並執行下列命令，就能安裝好 Git：
```
brew install git
```
03. git 指令參考

列出你電腦中所有的 SSH Key 
```
ls -al ~/.ssh
```

產生一組新的 SSH Key "請填自己的email"
```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

在產生金鑰的過程中，會詢問 3 個問題，如果沒有特殊需求可以全部使用預設值（按 Enter）就好：
```
Enter file in which to save the key (/home/username/.ssh/id_ed25519): /home/username/.ssh/github_key
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
```

檢視並複製生成的公鑰：
```
cat ~/.ssh/github_key.pub
``` 
ssh-ed25519 ........ your_email@example.com


連線測試：完成金鑰上傳後，驗證下這組金鑰是不是正常工作，如果一切正常，應該會看到下面的訊息：
```
ssh -T git@github.com
```
Hi XXX! You’ve successfully authenticated, but GitHub does not provide shell access.



### 參考資源
- 網頁框架[bootstrap](https://getbootstrap.com/)
- 網頁框架[UIKit](https://getuikit.com/)
- 網站設計[w3big.com](http://www.w3big.com/zh-TW/)


