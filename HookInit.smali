.class public Lcom/cookie/ele/HookInit;
.super Ljava/lang/Object;
.source "SourceFile"

# interfaces
.implements Lde/robv/android/xposed/IXposedHookLoadPackage;
.implements Lcom/cookie/ele/ConfigCallback;


# static fields
.field private static final SETTING_ACTIVITY:Ljava/lang/String; = "me.ele.account.ui.info.SettingMoreActivity2"


# instance fields
.field private alreadyHook:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private info:Ljava/lang/String;

.field private final needCookie:[Ljava/lang/String;

.field private thisObject:Landroid/app/Activity;


# direct methods
.method static constructor <clinit>()V
    .registers 1

    const-string v0, "native-lib"

    invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V

    return-void
.end method

.method public constructor <init>()V
    .registers 9

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const-string v0, "SID"

    const-string v1, "cookie2"

    const-string v2, "USERID"

    const-string v3, "_tb_token_"

    const-string v4, "unb"

    const-string v5, "unb"

    const-string v6, "deviceId"

    const-string v7, "umt"

    filled-new-array/range {v0 .. v4}, [Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/cookie/ele/HookInit;->needCookie:[Ljava/lang/String;

    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Lcom/cookie/ele/HookInit;->alreadyHook:Ljava/util/concurrent/atomic/AtomicBoolean;

    const-string v0, ""

    iput-object v0, p0, Lcom/cookie/ele/HookInit;->info:Ljava/lang/String;

    return-void
.end method

.method public static synthetic a(Lcom/cookie/ele/HookInit;Ljava/lang/String;Landroid/content/DialogInterface;I)V
    .registers 4

    invoke-direct {p0, p1, p2, p3}, Lcom/cookie/ele/HookInit;->lambda$showCookieDialog$0(Ljava/lang/String;Landroid/content/DialogInterface;I)V

    return-void
.end method

.method public static synthetic b(Landroid/content/DialogInterface;I)V
    .registers 2

    invoke-static {p0, p1}, Lcom/cookie/ele/HookInit;->lambda$showCookieDialog$1(Landroid/content/DialogInterface;I)V

    return-void
.end method

.method static bridge synthetic c(Lcom/cookie/ele/HookInit;)Ljava/util/concurrent/atomic/AtomicBoolean;
    .registers 1

    iget-object p0, p0, Lcom/cookie/ele/HookInit;->alreadyHook:Ljava/util/concurrent/atomic/AtomicBoolean;

    return-object p0
.end method

.method private copy(Ljava/lang/String;Landroid/content/Context;)V
    .registers 6

    const-string v0, "clipboard"

    invoke-virtual {p2, v0}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/content/ClipboardManager;

    const-string v1, " "

    const-string v2, ""

    invoke-virtual {p1, v1, v2}, Ljava/lang/String;->replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object p1

    const-string v1, "cookie"

    invoke-static {v1, p1}, Landroid/content/ClipData;->newPlainText(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Landroid/content/ClipData;

    move-result-object p1

    invoke-virtual {v0, p1}, Landroid/content/ClipboardManager;->setPrimaryClip(Landroid/content/ClipData;)V

    const-string p1, "复制成功\n开发者：你妈的小丑哥"

    const/4 v0, 0x0

    invoke-static {p2, p1, v0}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;

    move-result-object p1

    invoke-virtual {p1}, Landroid/widget/Toast;->show()V

    return-void
.end method

.method static bridge synthetic d(Lcom/cookie/ele/HookInit;)Ljava/lang/String;
    .registers 1

    iget-object p0, p0, Lcom/cookie/ele/HookInit;->info:Ljava/lang/String;

    return-object p0
.end method

.method static bridge synthetic e(Lcom/cookie/ele/HookInit;)Landroid/app/Activity;
    .registers 1

    iget-object p0, p0, Lcom/cookie/ele/HookInit;->thisObject:Landroid/app/Activity;

    return-object p0
.end method

.method static bridge synthetic f(Lcom/cookie/ele/HookInit;Ljava/lang/String;)V
    .registers 2

    iput-object p1, p0, Lcom/cookie/ele/HookInit;->info:Ljava/lang/String;

    return-void
.end method

.method static bridge synthetic g(Lcom/cookie/ele/HookInit;Landroid/app/Activity;)V
    .registers 2

    iput-object p1, p0, Lcom/cookie/ele/HookInit;->thisObject:Landroid/app/Activity;

    return-void
.end method

.method static bridge synthetic h(Lcom/cookie/ele/HookInit;Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;)V
    .registers 2

    invoke-direct {p0, p1}, Lcom/cookie/ele/HookInit;->hook(Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;)V

    return-void
.end method

.method private hook(Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;)V
    .registers 7

    iget-object v0, p0, Lcom/cookie/ele/HookInit;->thisObject:Landroid/app/Activity;

    invoke-virtual {v0}, Landroid/content/Context;->getClassLoader()Ljava/lang/ClassLoader;

    move-result-object v0

    const-string v1, "mtopsdk.security.InnerSignImpl"

    invoke-static {v1, v0}, Lde/robv/android/xposed/XposedHelpers;->findClass(Ljava/lang/String;Ljava/lang/ClassLoader;)Ljava/lang/Class;

    move-result-object v0

    const/4 v1, 0x7

    new-array v1, v1, [Ljava/lang/Object;

    const/4 v2, 0x0

    const-class v3, Ljava/util/HashMap;

    aput-object v3, v1, v2

    const/4 v2, 0x1

    aput-object v3, v1, v2

    const/4 v2, 0x2

    const-class v3, Ljava/lang/String;

    aput-object v3, v1, v2

    const/4 v2, 0x3

    aput-object v3, v1, v2

    const/4 v2, 0x4

    sget-object v4, Ljava/lang/Boolean;->TYPE:Ljava/lang/Class;

    aput-object v4, v1, v2

    const/4 v2, 0x5

    aput-object v3, v1, v2

    new-instance v2, Lcom/cookie/ele/HookInit$2;

    invoke-direct {v2, p0, p1}, Lcom/cookie/ele/HookInit$2;-><init>(Lcom/cookie/ele/HookInit;Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;)V

    const/4 p1, 0x6

    aput-object v2, v1, p1

    const-string p1, "getUnifiedSign"

    invoke-static {v0, p1, v1}, Lde/robv/android/xposed/XposedHelpers;->findAndHookMethod(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Object;)Lde/robv/android/xposed/XC_MethodHook$Unhook;

    return-void
.end method

.method static bridge synthetic i(Lcom/cookie/ele/HookInit;Ljava/lang/String;)V
    .registers 2

    invoke-direct {p0, p1}, Lcom/cookie/ele/HookInit;->showCookieDialog(Ljava/lang/String;)V

    return-void
.end method

.method private synthetic lambda$showCookieDialog$0(Ljava/lang/String;Landroid/content/DialogInterface;I)V
    .registers 4

    iget-object p3, p0, Lcom/cookie/ele/HookInit;->thisObject:Landroid/app/Activity;

    invoke-direct {p0, p1, p3}, Lcom/cookie/ele/HookInit;->copy(Ljava/lang/String;Landroid/content/Context;)V

    invoke-interface {p2}, Landroid/content/DialogInterface;->dismiss()V

    return-void
.end method

.method private static synthetic lambda$showCookieDialog$1(Landroid/content/DialogInterface;I)V
    .registers 2

    invoke-interface {p0}, Landroid/content/DialogInterface;->dismiss()V

    return-void
.end method

.method private onStartClicked(Landroid/content/Context;Lcom/cookie/ele/entity/Config;)V
    .registers 5

    if-eqz p2, :cond_b

    invoke-virtual {p2}, Lcom/cookie/ele/entity/Config;->getData()Lcom/cookie/ele/entity/Data;

    move-result-object p2

    invoke-virtual {p2}, Lcom/cookie/ele/entity/Data;->getOpenUrl()Ljava/lang/String;

    move-result-object p2

    goto :goto_d

    :cond_b
    const-string p2, ""

    :goto_d
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.intent.action.VIEW"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    invoke-static {p2}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p2

    const-string v1, "text/html"

    invoke-virtual {v0, p2, v1}, Landroid/content/Intent;->setDataAndType(Landroid/net/Uri;Ljava/lang/String;)Landroid/content/Intent;

    invoke-virtual {p1, v0}, Landroid/content/Context;->startActivity(Landroid/content/Intent;)V

    return-void
.end method

.method private processCookie(Ljava/lang/String;)Ljava/lang/String;
    .registers 11

    invoke-virtual {p1}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_7

    return-object p1

    :cond_7
    const-string v0, ";"

    invoke-virtual {p1, v0}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p1

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    array-length v2, p1

    const/4 v3, 0x0

    move v4, v3

    :goto_15
    if-ge v4, v2, :cond_41

    aget-object v5, p1, v4

    const-string v6, "="

    invoke-virtual {v5, v6}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object v6

    sget-object v7, Ljava/lang/System;->out:Ljava/io/PrintStream;

    aget-object v8, v6, v3

    invoke-virtual {v7, v8}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    iget-object v7, p0, Lcom/cookie/ele/HookInit;->needCookie:[Ljava/lang/String;

    invoke-static {v7}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v7

    aget-object v6, v6, v3

    invoke-virtual {v6}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object v6

    invoke-interface {v7, v6}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v6

    if-eqz v6, :cond_3e

    invoke-virtual {v1, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    :cond_3e
    add-int/lit8 v4, v4, 0x1

    goto :goto_15

    :cond_41
    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method private showCookieDialog(Ljava/lang/String;)V
    .registers 8

    invoke-direct {p0, p1}, Lcom/cookie/ele/HookInit;->processCookie(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    new-instance v0, Landroid/widget/LinearLayout;

    iget-object v1, p0, Lcom/cookie/ele/HookInit;->thisObject:Landroid/app/Activity;

    invoke-direct {v0, v1}, Landroid/widget/LinearLayout;-><init>(Landroid/content/Context;)V

    new-instance v1, Landroid/widget/LinearLayout$LayoutParams;

    const/4 v2, -0x1

    const/4 v3, -0x2

    invoke-direct {v1, v2, v3}, Landroid/widget/LinearLayout$LayoutParams;-><init>(II)V

    invoke-virtual {v0, v1}, Landroid/view/View;->setLayoutParams(Landroid/view/ViewGroup$LayoutParams;)V

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Landroid/widget/LinearLayout;->setOrientation(I)V

    new-instance v1, Landroid/widget/TextView;

    iget-object v2, p0, Lcom/cookie/ele/HookInit;->thisObject:Landroid/app/Activity;

    invoke-direct {v1, v2}, Landroid/widget/TextView;-><init>(Landroid/content/Context;)V

    const/high16 v2, 0x41800000  # 16.0f

    invoke-static {v2}, Lcom/cookie/ele/GlobalApplication$CrashActivity;->a(F)I

    move-result v3

    invoke-static {v2}, Lcom/cookie/ele/GlobalApplication$CrashActivity;->a(F)I

    move-result v4

    invoke-static {v2}, Lcom/cookie/ele/GlobalApplication$CrashActivity;->a(F)I

    move-result v2

    const/4 v5, 0x0

    invoke-virtual {v1, v3, v4, v2, v5}, Landroid/widget/TextView;->setPadding(IIII)V

    invoke-static {}, Landroid/text/method/ScrollingMovementMethod;->getInstance()Landroid/text/method/MovementMethod;

    move-result-object v2

    invoke-virtual {v1, v2}, Landroid/widget/TextView;->setMovementMethod(Landroid/text/method/MovementMethod;)V

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "<b>"

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v3, "</b>"

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    const/16 v3, 0x200

    const/4 v4, 0x0

    invoke-static {v2, v3, v4, v4}, Lrikka/html/text/HtmlCompatKt;->a(Ljava/lang/CharSequence;ILandroid/text/Html$ImageGetter;Lrikka/html/text/HtmlCompat$TagHandler;)Landroid/text/Spanned;

    move-result-object v2

    invoke-virtual {v1, v2}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    invoke-virtual {v0, v1}, Landroid/view/ViewGroup;->addView(Landroid/view/View;)V

    new-instance v1, Landroid/app/AlertDialog$Builder;

    iget-object v2, p0, Lcom/cookie/ele/HookInit;->thisObject:Landroid/app/Activity;

    invoke-direct {v1, v2}, Landroid/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

    const-string v2, "饿了么CK"

    invoke-virtual {v1, v2}, Landroid/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/app/AlertDialog$Builder;->setView(Landroid/view/View;)Landroid/app/AlertDialog$Builder;

    move-result-object v0

    invoke-virtual {v0, v5}, Landroid/app/AlertDialog$Builder;->setCancelable(Z)Landroid/app/AlertDialog$Builder;

    move-result-object v0

    new-instance v1, Lcom/cookie/ele/c;

    invoke-direct {v1, p0, p1}, Lcom/cookie/ele/c;-><init>(Lcom/cookie/ele/HookInit;Ljava/lang/String;)V

    const-string p1, "复制ck"

    invoke-virtual {v0, p1, v1}, Landroid/app/AlertDialog$Builder;->setPositiveButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    new-instance v0, Lcom/cookie/ele/d;

    invoke-direct {v0}, Lcom/cookie/ele/d;-><init>()V

    const-string v1, "取消"

    invoke-virtual {p1, v1, v0}, Landroid/app/AlertDialog$Builder;->setNegativeButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    invoke-virtual {p1}, Landroid/app/AlertDialog$Builder;->create()Landroid/app/AlertDialog;

    move-result-object p1

    invoke-virtual {p1}, Landroid/app/Dialog;->show()V

    return-void
.end method


# virtual methods
.method public callbackCookieMethod(Ljava/lang/String;)V
    .registers 4

    invoke-static {p1}, Lde/robv/android/xposed/XposedBridge;->log(Ljava/lang/String;)V

    new-instance v0, Landroid/os/Handler;

    invoke-static {}, Landroid/os/Looper;->getMainLooper()Landroid/os/Looper;

    move-result-object v1

    invoke-direct {v0, v1}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    new-instance v1, Lcom/cookie/ele/HookInit$4;

    invoke-direct {v1, p0, p1}, Lcom/cookie/ele/HookInit$4;-><init>(Lcom/cookie/ele/HookInit;Ljava/lang/String;)V

    invoke-virtual {v0, v1}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    return-void
.end method

.method public callbackFailure(Ljava/lang/String;)V
    .registers 4

    new-instance v0, Landroid/os/Handler;

    invoke-static {}, Landroid/os/Looper;->getMainLooper()Landroid/os/Looper;

    move-result-object v1

    invoke-direct {v0, v1}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    new-instance v1, Lcom/cookie/ele/HookInit$3;

    invoke-direct {v1, p0, p1}, Lcom/cookie/ele/HookInit$3;-><init>(Lcom/cookie/ele/HookInit;Ljava/lang/String;)V

    invoke-virtual {v0, v1}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    return-void
.end method

.method native getConfig(Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;Landroid/app/Activity;)V
.end method

.method public handleLoadPackage(Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;)V
    .registers 8

    iget-object v0, p1, Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;->packageName:Ljava/lang/String;

    const-string v1, "com.cookie.ele"

    invoke-virtual {v1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const/4 v1, 0x0

    const/4 v2, 0x1

    if-eqz v0, :cond_34

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    const-class v3, Lcom/cookie/ele/HomeActivity;

    invoke-virtual {v3}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v3, "$Companion"

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    iget-object v3, p1, Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;->classLoader:Ljava/lang/ClassLoader;

    new-array v4, v2, [Ljava/lang/Object;

    sget-object v5, Ljava/lang/Boolean;->TRUE:Ljava/lang/Boolean;

    invoke-static {v5}, Lde/robv/android/xposed/XC_MethodReplacement;->returnConstant(Ljava/lang/Object;)Lde/robv/android/xposed/XC_MethodReplacement;

    move-result-object v5

    aput-object v5, v4, v1

    const-string v5, "isModuleActivated"

    invoke-static {v0, v3, v5, v4}, Lde/robv/android/xposed/XposedHelpers;->findAndHookMethod(Ljava/lang/String;Ljava/lang/ClassLoader;Ljava/lang/String;[Ljava/lang/Object;)Lde/robv/android/xposed/XC_MethodHook$Unhook;

    :cond_34
    const-string v0, "me.ele"

    iget-object v3, p1, Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;->packageName:Ljava/lang/String;

    invoke-virtual {v0, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_3f

    return-void

    :cond_3f
    const/4 v0, 0x2

    new-array v0, v0, [Ljava/lang/Object;

    const-class v3, Landroid/os/Bundle;

    aput-object v3, v0, v1

    new-instance v1, Lcom/cookie/ele/HookInit$1;

    invoke-direct {v1, p0, p1}, Lcom/cookie/ele/HookInit$1;-><init>(Lcom/cookie/ele/HookInit;Lde/robv/android/xposed/callbacks/XC_LoadPackage$LoadPackageParam;)V

    aput-object v1, v0, v2

    const-class p1, Landroid/app/Activity;

    const-string v1, "onCreate"

    invoke-static {p1, v1, v0}, Lde/robv/android/xposed/XposedHelpers;->findAndHookMethod(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Object;)Lde/robv/android/xposed/XC_MethodHook$Unhook;

    return-void
.end method
