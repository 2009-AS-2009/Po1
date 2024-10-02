importجلب الاستيراد من  "عقدة جلب"جلب من. "node-fetch"

letدع هاندلر = Asynclet handler = async (m, {(M، {.handler = async (m, {
    conn,كون، conn,
    args,أرغ، args,
    usedPrefix,تستخدمPrefix، usedPrefix,
    commandالأمر. command
})}) => {{
 دع النص. let text
    if (args.length >= 1) {إذا (args.length >= 1) { if (args.length >= 1) {
  النص = args.slice (0).join (") slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {} وإلا إذا (m.quoted & m.quoted.text) { } else if (m.quoted && m.quoted.text) {
  النص = m.quoted.text quoted.text
    } else throw "ex : \n *.gptvoc*   ما الاسلام"} 'إلقاء "السابق: \n *.gptvoc* ما الاسلام' } else throw "ex : \n *.gptvoc*   ما الاسلام"
  انتظر M.Reply (انتظر) Reply (انتظر) await m.reply(wait)
  حاول  { { try {
  دع res = في انتظار  ChatGpt (نص) ChatGpt (نص) let res = await ChatGpt(text)
  في انتظار M.Reply (Res.Content) Reply (Res.Content) await m.reply(res.content)
    } catch (e) {} الصيد (هـ) { } catch (e) {
  انتظر M.Reply (خطأ) Reply (خطأ) await m.reply(eror)
    }} }
}
Handler.Help = ["GPTVOC"]help = ["gptvoc"]
handler.tags = ["ai"]؛tags = ["ai"];
handler.command = /^ (بوت) $/icommand = /^(بوت)$/i
Handler.Register = Handler.Limit = كاذبregister = handler.limit = false

exportتصدير معالج الافتراضي.default handler

/* New Line */

constدردشة المحتوى = عدم انتماءconst ChatGpt = async (prompt) => {(موجه) => {ChatGpt = async (prompt) => {
    const url = "https://apps.voc.ai/api/v1/plg/prompt_stream";const url = "https://apps.voc.ai/api/v1/plg/prompt_stream"؛ const url = "https://apps.voc.ai/api/v1/plg/prompt_stream";

  حاول  { { try {
    استجابة كونست = في انتظار    جلب (العنوان URL، {. جلب (العنوان URL، {. const response = await fetch(url, {
            method: "POST",الطريقة: "بوست"، method: "POST",
  أوراق الاعتماد:  "تشمل"، "include",
 الوضع: "Cors"، "cors",
 الرؤوس: { {
 "نوع المحتوى": "التطبيق / JSON" Content-Type": "application/json"
            },}, },
    الجسم: JSON.Stringify    ({ سترينجيفاي..({
 موجه. promptموجه. prompt
 }), }),}), }),
 }); });}); });

     مدخلات كونستستسترينغ = في انتظار الرد.النص     () ؛ () ؛ const inputString = await response.text();
    ضفة بيانات المحتوى = inputString.split    ('\n\n') ؛ ('\n\n') ؛ const dataArray = inputString.split('\n\n');

 const  regex = / البيانات:  (\{.*?\}) /g؛ const regex = /data: (\{.*?\})/g;const  regex = / البيانات:  (\{.*?\}) /g؛ const regex = /data: (\{.*?\})/g;
 مسابقات سون = []؛ []؛ const jsonMatches = [];
      السماح المباراة;     let match;let match;

    بينما    ((مباراة = regex.exec  (dataArray[0])!== null) { while ((match = regex.exec(dataArray[0])) !== null) {
  جلس المباريات.  (مباراة[1]) ؛ (match[1]);
 } }} }

 Const oregex = /"البيانات": ({.*?}) /; ({.*?}) /; const oregex = /"data": ({.*?})/;
  '2' 'النهايات الحقيقية' = jsonMatches.slice  (-1) ؛ (-1) ؛ const endsTrueArray = jsonMatches.slice(-1);
  مخرجات المحتوى = ينتهيالصفحة الحقيقية  [0].المباراة (الأصل) ؛ [0].المباراة (الأصل) ؛ const output = endsTrueArray[0].match(oregex);

  إرجاع الإخراج؟ JSON.parse  (الإخراج[1]): لاغية؛ العودة. output ? JSON.parse(output[1]) : null;
    } catch (error) {} الصيد (خطأ) { } الصيد. (error) {
        console.error("Error fetching data:", error);
        return null;العودة. null.;
    }}} }
   };
