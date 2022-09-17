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


Window 使用 SSH 金鑰：基本上所有動作跟在 Linux 一樣，唯一的差異就是在 SSH 金鑰存放的位置是在
```
c:/Users/user_name/.ssh
```

#### git 指令：複製本站 "網站資料"  到您的電腦上
打開 終端機/Terminal ，並且進入到「網站資料夾」，輸入下列指令。

1. 複製指令：clone ( . 要記得加)
```
git clone git@github.com:zambala64/temple.git . 
```


#### git 指令：local端電腦(網站資料) 上傳到 Git 
打開 終端機/Terminal ，並且進入到「網站資料夾」，輸入下列指令。

1. 初始化
```
git init
```

2. 新增項目：將修改的項目暫存起來。
```
git add .
```

3. 紀錄項目：將修改的項目儲存、備註。 "裡面注釋：可英文、中文"
```
git commit -m "initial commit"
```

4. 遠端連線：將本地端 local 的資料夾，綁定到 git (只需做第一次，會自動綁定。)
```
git remote add origin git@github.com:nohatw/temple.git
```

5. 上傳資料：將本地端電腦網頁資料，上傳到 git
```
git push -u origin
```


### 參考資源
- 網頁框架[bootstrap](https://getbootstrap.com/)
- 網頁框架[UIKit](https://getuikit.com/)
- 網站設計[w3big.com](http://www.w3big.com/zh-TW/)


