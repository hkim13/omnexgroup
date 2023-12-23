import Image from 'next/image'

export default function UserAgreementPage() {
  return (
    <main className='max-w-[834px] mx-auto px-6 pt-[80px] md:pt-[85px]'>
      <div className='flex flex-col gap-10 text-center pb-[40px] md:pb-[79px]'>
        <div>
          <h3 className="font-bold pb-4 text-green">Secure Compliance</h3>
          <h1 className='text-[#253D84]'>User Agreement</h1>
        </div>
        <p>Effective as of: October 16, 2023</p>
      </div>
      <div>
        <div className='flex flex-col gap-[80px] pb-[70px]'>
          
            {/* Contact Information */}
            <div className='flex flex-col gap-10'>
            <h3 className='text-[#253D84]'>Contact Information</h3>
                <ul className='list-disc pl-[20px]'>
                    <li>Questions, notifications, compliments, complaints and requests for refunds or further information can be sent to Omnex as follows:</li>
                    <li>On-line: <a className='font-medium underline' href="www.omnexgroup.com">www.omnexgroup.com</a></li>
                    <li>Via Email: <a className='font-medium underline break-words' href="customerservice@omnexgroup.com">customerservice@omnexgroup.com</a></li>
                    <li>By Telephone: (866) 819-0119</li>
                    <li>By Mail: Omnex Group, Inc., Attn: Customer Service, 580 Sylvan Ave LL-A, Englewood Cliffs, NJ 07632, U.S.A</li>
                </ul>
                <p>Thank you for visiting a service of Omnex Group, Inc. (&quot;Omnex&quot;). The following User Agreement governs the terms under which you may access and use Omnex Group company websites (including, for the purposes hereof, any mobile applications) and the services made available to you (the &quot;Services&quot;) by Omnex, the licensed provider of the Services. You should not access or use the Services if you do not agree to the following conditions.</p>
            </div>

            {/* By Accessing or Using the Services, You Are Agreeing to Follow All the Conditions Set Forth Below. */}
            <div className='flex flex-col gap-10'>
            <h3 className='text-[#253D84]'>By Accessing or Using the Services, You Are Agreeing to Follow All the Conditions Set Forth Below.</h3>
                <p>As used herein and throughout the policies and notices on the websites, the terms &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to Omnex, the licensed provider of the Services, together with its successors and assignees. The terms &quot;you&quot; and &quot;your&quot; refer to any Sender, Recipient, website visitor or other user of the Services.</p>
                <p>A &quot;Sender&quot; is a person who places an Order to send money through the Services. A &quot;Recipient&quot; is a person who receives money from a Sender. The &quot;Recipient Country&quot; is the country in which the Recipient receives the money from the Sender. An &quot;Order&quot; is a specific request to send money through the Services. The &quot;Order Amount&quot; is the amount that the Sender requests us to send to the Recipient and does not include the Transaction Fee. The &quot;Payout Amount&quot; is the amount paid out to the Recipient, after being converted into another currency, as applicable, and prior to payment of any tariffs, taxes or charges that may be levied under the laws of the Recipient Country. The Order is finalized when the Payment Amount is released to the Beneficiary.</p>
                <p>When you register to use the Services, you: (i) agree that your computer system meets the minimum hardware and software requirements set forth below and you can read and print any communications that we make available to you electronically; (ii) affirmatively agree to the Electronic Consent as set forth below and to receive communications electronically (not in paper form); (iii) consent to your bank account being debited (or credited) and, when applicable, your debit card being debited (or credited) and/or credit card account being charged electronically to pay for the Orders you initiate through the Website along with any applicable fees, including the Transaction Fee, and other applicable charges; (iv) consent to using an electronic signature on required documents and agreements including any agreements that you may be required to sign in order to authorize ACH debits/credits and/or for credit card transactions; (v) agree that your consent reasonably demonstrates that you can access information electronically, you are able to use an electronic signature, and any electronic signature that you provide on any agreements that you may be required to sign in order to authorize ACH debits/credits and/or for credit card transactions shall be valid and binding.</p>
            </div>



            {/* Electronic Consent */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Electronic Consent</h3>
                <p>When you use the Services, or send e-mails to us, you are communicating electronically with us. You consent to receive communications from us electronically. We will communicate with you by email or by posting notices on this site. &quot;Communications&quot; include receipts, agreements, notices, disclosures, statements, information regarding the debiting and crediting of your bank account, debit or credit card, the history and confirmation of transactions, customer service communications and other information regarding the Services. You agree that all communications we provide to you electronically, including our User Agreement and Privacy Policy, satisfy any legal requirement that such communications be in writing.</p>
                <p>Upon acceptance of the User Agreement, you consent to receive email communications regarding registration of your Omnex Group company account. Should you not complete your registration for the account within 10 days you will receive an email reminding you to complete registration. You may receive such emails until you either complete registration or terminate your account.</p>
                <p>If you so elect, we may also communicate with you via SMS or text message. We may send you messages about your transactions or promotional messages. Message and data rates may apply when you receive such messages on your mobile phone. To stop receiving SMS or text messages about your transaction and/or promotions from Omnex, please change your preferences on the Omnex Group company website, reply &quot;Stop&quot; from your mobile phone, or contact Customer Service.</p>
                <p>You may choose not to agree to this Electronic Consent, or, you may withdraw your consent to receive all communications electronically, but if you do, your use of the Services shall be terminated. In order to withdraw your consent, you must contact us in writing at the address shown above. Your withdrawal will only become effective after we have received such notice and have had a reasonable amount of time to process it.</p>
                <p>In order to access and retain Communications, you must have: (i) an internet browser that supports 128-bit encryption, (ii) an e-mail account and the capability to read e-mails from Omnex Group companies, (iii) a device and Internet connection capable of supporting the foregoing, (iv) sufficient electronic storage capacity on your computer&apos;s hard drive or other data storage unit and (v) a printer that is capable of printing from your browser and email software. When you register to use the Services, you agree that: your computer system meets the minimum hardware and software requirements set forth above and you can read and print any communications that we make available to you electronically.</p>
                <p><div className='text-[#253D84] font-bold'>Retaining Copies for Your Records</div>You should print a paper copy of any electronic communication that is important to you and retain the copy for your records. You may obtain from us a paper copy of any legally required communications and/or agreement for up to 24 months after such communication or agreement has been provided or made available to you electronically. You may request such a paper copy by sending a detailed written request to us at the address shown above. Although we do not currently impose a fee for a paper copy of our electronic records, we reserve the right to charge fees for paper copies at a later date if we post a notice regarding such change on our website.</p>
            </div>



            {/* Privacy Policy and Collection of Information */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Privacy Policy and Collection of Information</h3>
                <p>Please review our Privacy Policy, which also governs your use of the Services. By accessing our websites or using our Services, you consent to the terms of our Privacy Policy.</p>
                <p>Our Privacy Policy explains the type of personal information we may collect about you and how we may use that information. Please review the Privacy Policy for details on how Omnex Group companies use identifying information.</p>
                <div>
                <p className='text-[#253D84] font-bold'>Collection of Information Summary</p>
                <ul className='list-disc pl-[20px] '>
                    <li><span className='font-bold'>Customer Identification.</span> In order to prevent the funding of terrorism and money laundering, we are required by law to obtain, verify, and record information about you. We may require that you provide us with nonpublic, personal, identifying information. We may also lawfully obtain information about you from other sources without your knowledge, including non-personal identifying information that we may obtain while you visit our websites. Please see our Privacy Policy.</li>
                    <li><span className='font-bold'>Information Verification.</span> You authorize us to make any inquiries directly or through third parties that we consider necessary to verify information that you provide to us. We may need to ask you for additional information, including asking you to confirm your email address or ownership of bank accounts or debit/credit card accounts. We may also validate your information through third party databases or other sources.</li>
                    <li><span className='font-bold'>Government Disclosure.</span> As discussed in our Privacy Policy, we may provide information about you and/or your Transactions to government authorities and enforcement agencies.</li>
                </ul>
                </div>
            </div>

            {/* Using the Service */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Using the Service</h3>
                <p>The Services are intended for personal use only and may not be used for business. We recommend that you use the Services only to send money to people you know personally. You should never use the Services to send money to strangers. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. We have the right to accept or reject, in our sole discretion, any Order submitted by you.</p>
                <p><div className='text-[#253D84] font-bold'>Eligible Users</div>Only persons who are (i) at least eighteen (18) years old and (ii) able to form binding contracts under applicable law may use the Services to send money. Other restrictions may apply.</p>
                <p><div className='text-[#253D84] font-bold'>Not Available to Certain Residents</div>If you are a resident of Alaska, or provide us with a mailing address in Alaska for any form of payment for the Services, you may not use the Services. The Services may not be available in whole or in part in other states, countries, and jurisdictions.</p>
                <div>
                <p className='text-[#253D84] font-bold'>Payment</p>
                    <ul className='list-disc pl-[20px] '>
                        <li><span className='font-bold'>Charges.</span> For each Order that you submit, you agree to pay us a transaction fee (the &quot;Transaction Fee&quot;) plus the order amount. The applicable Transaction Fee will be provided to you prior to your final authorization for any Order. Messaging and notification services selected by you may be included for additional fees. Payment is due at the time your Order is submitted for processing. We only accept payment in U.S. Dollars. If you submit an Order and we are charged non-sufficient fund fees, chargeback fees, or other similar fees, you agree to reimburse us for all such fees. Additional charges may apply. In some instances, for Orders funded from your bank account, you agree that we may debit your bank account for less than the amount of the transfer (i.e., for a transfer of $350, we may debit $349.95 from the bank account) or make small deposits which are subsequently reversed after confirmation of the amount by you, as part of our effort to confirm ownership of the account. In addition to the Transaction Fee, we may make money when you pay for an Order in one currency and the order is paid out in another currency, which is based on the difference between the exchange rate at which we are able to buy foreign currency and the exchange rate provided to you. Please pay careful attention to the currency exchange rate applicable to your Order prior to completing your Order.</li>
                        <li><span className='font-bold'>Acceptable Forms of Payment.</span> You may pay for the Services by using a debit card issued by a financial institution located in the United States, or a Visa or MasterCard credit card issued in the United States (each, a &quot;Bank Card&quot;). Alternatively, you may use your bank account at a United States Bank (&quot;Bank Account&quot;). Your Bank Card or Bank Account are both referred to as &quot;Payment Instruments&quot; in this User Agreement. You represent and warrant that you are the lawful owner of each of the Payment Instrument(s) associated with your account and that you are not placing Orders on behalf of any person other than yourself. We are not responsible for actions taken by the financial institution that holds your Bank Account and you agree not to hold us responsible if your financial institution does not properly post the transaction to your Bank Account.</li>
                        <li><span className='font-bold'>Collecting Payment.</span> You may pay for the Services by using a debit card issued by a financial institution located in the United States, or a Visa or MasterCard credit card issued in the United States (each, a &quot;Bank Card&quot;). Alternatively, you may use your bank account at a United States Bank (&quot;Bank Account&quot;). Your Bank Card or Bank Account are both referred to as &quot;Payment Instruments&quot; in this User Agreement. You represent and warrant that you are the lawful owner of each of the Payment Instrument(s) associated with your account and that you are not placing Orders on behalf of any person other than yourself. We are not responsible for actions taken by the financial institution that holds your Bank Account and you agree not to hold us responsible if your financial institution does not properly post the transaction to your Bank Account.</li>
                        <li><span className='font-bold'>Other Charges.</span> We are not responsible for any fees or charges that may be imposed by the financial institutions associated with your Payment Instruments. For example (without limitation), some credit card issuers may treat the use of your credit card to use the Services as a &quot;cash advance&quot; rather than a purchase transaction, and may impose additional fees and interest rates for the transaction. Please check with your card issuer for additional details on cash advance and other fees. We are not responsible for any non-sufficient funds charges, chargeback fees, or other similar charges that might be imposed on you by your bank, credit card issuer, or other provider. If any non-sufficient funds charges, chargeback fees or other similar charges are imposed upon us related to your use of the Services, you agree that we may charge any one of your Payment Instruments for the amount of such fees; if we are unable to be reimbursed for the fees via any one of your Payment Instruments, you agree to remit payment to us for the fees and any additional expenses of collection immediately upon notice by us.</li>
                        <li><span className='font-bold'>Mobile Charges.</span> Should you choose to access the Services through a smart phone or other mobile device, or to receive SMS or text messages, your wireless provider&apos;s standard charges, data rates and other fees may apply.</li>
                        <li><span className='font-bold'>Foreign Currencies.</span> You agree that, when the destination of your Order is a bank account, that the bank account is denominated in the same currency as the Order (e.g., if you wish to send pesos directly to your recipient&apos;s bank account, then that account must be peso based). If the account is based in a different currency you may be responsible for additional conversion fees or your Order may not be able to be completed.</li>
                    </ul>
                </div>
            </div>
            
            {/* Order Limits and Documents */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Order Limits and Documents</h3>
                
                <p><div className='text-[#253D84] font-bold'>Pay Out of Orders</div><span className='font-bold'>Affiliates</span>. We work with local banks, money exchange houses, and other third-party service providers to pay out funds to Order Recipients. You, in your capacity as a Sender, hereby appoint your Recipient as your agent for the purpose of receiving the funds as specified in the Order. As a convenience for you, we will provide certain information regarding the location, hours and requirements for pickup of our affiliates. The foregoing information is subject to change, and you agree that we are not responsible for any inaccurate, incomplete, or out-of-date information that may be posted on our websites. If you encounter any such inaccurate, incomplete or out-of-date information, we appreciate you letting us know so that we may investigate or correct the information.</p>
                <p><span className='font-bold'>Verification.</span> Recipients may be required to prove their identity before receiving funds by presenting valid, unexpired identification document(s) from a list of acceptable forms of identification. In addition, Recipients may be required to provide an Order number, a personal identification number (or PIN), a &quot;password&quot;, a &quot;secret word&quot;, and/or another, similar identifier associated with the Order. You agree that it is the Recipient&apos;s responsibility to confirm what information and identification will be necessary prior to attempting to pick up the funds. You give us permission to store and share all such data, as necessary to provide the Services.</p>
            </div>


            {/* Restrictions */}
            <div className='flex flex-col gap-10'>
            <h3 className='text-[#253D84]'>Restrictions</h3>
            <p><span className='font-bold'>Generally,</span> we reserve the right at any time, and from time to time, to modify or discontinue the Services (or any part thereof) with or without notice. We may, at any time and in our sole discretion, refuse any Order or limit the amount to be transferred, either on a per Order basis or on an aggregated basis, all without prior notice. Any such limits may be imposed on individual accounts, linked accounts, or on related accounts or households, in our sole discretion.</p>
            <p><span className='font-bold'>Prohibited Activities.</span> Without limiting other restrictions contained in this User Agreement, in the course of your use of the Services or interactions with us, a user or a third party, you will not:</p>
            <ul className='list-disc pl-[20px]'>
                <li>Breach this User Agreement, or any other agreement between us;</li>
                <li>Open more than one account per Omnex Group company;</li>
                <li>Provide false, inaccurate, or misleading information;</li>
                <li>Refuse to cooperate in an investigation;</li>
                <li>Refuse to provide confirmation of your identity or any information you provide to us;</li>
                <li>Use a proxy to mask your identity; or</li>
                <li>Send yourself a cash advance from your credit card.</li>
            </ul>
            <p><span className='font-bold'>Delay or Cancellation of Order.</span> Attempts to verify your identity, validate your Order instructions or your Payment Instruments, or to comply with applicable law may result in the delay or cancellation of your Order. Business hours, time changes, Internet or other technical disruptions and currency availability of our payout partners may also cause delays in completing your Order. Nevertheless, you may be entitled to a refund in certain circumstances, as described below.</p>
            <p><span className='font-bold'>Commercial Transactions.</span> The use of the Services for commercial purposes is prohibited. You agree that you will only use the Services to send money to people that you know personally and for personal reasons. If we have reason to believe that you are using the Services to purchase goods or services, we may cancel your Orders and close your account.</p>
            <p><span className='font-bold'>Unauthorized or Illegal Transactions.</span> You may not use the Services in any manner inconsistent with this User Agreement or applicable laws, rules or regulations. In addition to closing an account because we believe that it is being used for commercial purposes, we may cancel any Order and close any account that it suspects is being utilized for any of the following activities (without limitation): sexually-oriented materials or services; gambling activities; fraud; money-laundering; funding terrorist organizations; purchase or sale of tobacco, firearms, prescription drugs, or other controlled substances; or sending money to a Recipient that has violated the User Agreement. If you use the Services in connection with illegal conduct, we may also report you to the appropriate law enforcement agency or agencies.</p>
            <p><span className='font-bold'>Ineligibility.</span> Not all Payment Instruments are available to all customers at all times. We may, in our sole discretion, refuse Orders funded from certain Payment Instruments. We may, in our sole discretion, cancel Orders from certain Senders and to certain Recipients before they are finalized, including without limitation, entities and individuals that are included on the Specially Designated Nationals list, Non-cooperative Countries and Territories list, and such other lists as may be issued from time to time by the U.S. Department of Treasury and other government agencies.</p>
            <p><span className='font-bold'>Other Persons.</span> You may not submit or receive an Order on behalf of (i) any other person or (ii) a charitable organization without our express consent. We may, at any time and in our sole discretion, refuse any Order, or close multiple accounts held by an individual, persons related to the individual or persons living in the same household as the individual.</p>
            <p><span className='font-bold'>No Changes.</span> We generally do not let you change the details of your Order once it has been submitted to us for processing. It is your responsibility to make sure your Order details are accurate.</p>
            </div>

           {/* Concerns or problems */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Concerns or problems</h3>
                <p>If you have complaints with respect to any aspect of the money transmission activities conducted through Omnex Group Inc., you may contact the state licensing representatives from the state in which you initiated the transaction here: <a href='regulatory/file-a-complaint' className='font-medium underline break-words'>https://www.omnexgroup.com/us/en/file-a-complaint</a></p>
            </div>


            {/* Right to Refund */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Right to Refund</h3>
                <p><span className='font-bold'>Refunds.</span> As a Sender, you can cancel a transaction in writing or by phone for a full refund at any time before the transmission has been deposited for, picked up by, or delivered to the Recipient. You must provide a specific request for cancellation. Otherwise we will not provide a refund, unless the transaction cannot be completed because we did not process your Order according to your instructions, in which case you would receive a refund of the transaction principal and all fees and taxes, or we are unable to disburse the funds as specified in the Order in which case you would receive a return of the principal only. If you provide a specific request for cancellation, we will refund the Order Amount, the Transaction Fee, and any applicable taxes only if the Order was not paid out to the Recipient. If an order is paid out to a Recipient in error as defined by 12 CFR Part 1005.33, we will refund the principal and any fees and taxes or resend the transaction to the intended recipient and refund you the transaction fees. Refunds will be credited to the same Payment Instrument used to pay for the Order. Refunds are only made in U.S. dollars. Refund amounts will not be adjusted to account for changes in the value of the U.S. dollar or foreign currency from the time your Order was submitted.</p>
                <p>Notwithstanding the foregoing, residents of certain jurisdictions should read the following:</p>
                <ul className='list-disc pl-[20px]'>
                    <li><span className='font-bold'>California.</span> The following applies only to Transactions that are submitted by Senders in California.</li>
                </ul>
                <p><span className='font-bold'>Right to Refund:</span> You, the customer, are entitled to a refund of the money to be transmitted as the result of this agreement if we do not forward the funds received from you within 10 days of the date of its receipt, or do not give instructions committing an equivalent amount of funds to the person designated by you within 10 days of the date of the receipt of the funds from you unless otherwise instructed by you.</p>            
                <p>If your instructions as to when the funds shall be forwarded or transmitted are not complied with and the funds have not yet been forwarded or transmitted you have a right to a refund of your money.</p>
                <p>If you want a refund, you may mail or deliver your written request to Omnex Group, Inc. attn: Customer Service, at 580 Sylvan Ave., LL-A, Englewood Cliffs, NJ 07632, U.S.A. You may also contact Omnex customer service by phone at (866) 819-0119. If you do not receive your refund, you may be entitled to your money back plus a penalty of up to $1,000 and attorney&apos;s fees pursuant to Section 2102 of the California Financial Code.</p>
                <ul className='list-disc pl-[20px]'>
                    <li><span className='font-bold'> Washington.</span> The following applies only to Orders that are submitted by Senders in the State of Washington.</li>
                </ul>
                <p>You, the customer, are entitled to a refund of all moneys received for transmittal within ten days of receipt of a written request for refund unless any of the following occurs:</p>
                <ul className='list-disc pl-[20px]'>
                    <li>The monies have been transmitted and delivered to the Recipient prior to receipt of the written request for a refund;</li>
                    <li>Instructions have been given committing an equivalent amount of money to the person designated by the customer prior to receipt of a written request for a refund;</li>
                    <li>We, or our authorized delegate has reason to believe that a crime has occurred, is occurring, or may potentially occur as a result of transmitting the money as requested by the customer or refunding the money as requested by the customer; or</li>
                    <li>We are otherwise barred by law from making a refund.</li>
                </ul>
                <div>
                    <ul className='list-disc pl-[20px]'>
                        <li><span className='font-bold'>Illinois.</span> The following applies only to Orders that are submitted by Senders in the State of Illinois.</li>
                    </ul>
                    <p>The licensee or authorized seller, in addition to the records required to be kept, shall issue a receipt to each person delivering or depositing money with the licensee or authorized seller indicating the date of the transaction, the face amount of the payment instrument, to whom the money is to be transmitted, the service charge, and the name and address of the licensee or authorized seller. The receipt or a separate disclosure at the time of the money transmission shall also include a statement of the licensee&apos;s refund procedures as well as a toll-free telephone number for customer assistance.</p>
                </div>
                <p>To request a refund by email, please contact Customer Service.</p>
                
            </div>

            {/* Our Intellectual Property */}
            <div className='flex flex-col gap-10'>
            <h3 className='text-[#253D84]'>Our Intellectual Property</h3>
            <p>You acknowledge that the Services, including but not limited to the content of our websites, text, graphics, links, buttons, logos, and images, as well as all other patents, copyrights, trademarks, trade secrets, service marks, logos, and product and service names (the &quot;Intellectual Property&quot;) are owned by us or our affiliates, or are licensed to us pursuant to licensing agreements. You agree not to display, use, copy, or modify the Intellectual Property in any manner. You are authorized solely to view and retain a copy of the pages of our website for your own personal, non-commercial use. You further agree not to: (i) engage in or use any automated devices, data mining, robots, scraping or similar data gathering or extraction methods to access or use the Services; (ii) modify, copy, frame, scrape, rent, lease, loan, sell, distribute or create derivative works based on the Services, in whole or in part, except that the foregoing does not apply to the information that you legally upload to the Services; (iii) remove or alter any author, trademark or other proprietary notice or legend displayed on our websites (or printed pages thereof); or (iv) infringe any party&apos;s copyright, patent, trademark, trade secret or other intellectual property rights, or rights of publicity or privacy through the use or accessing of the Services.</p>
            <p>The technology and software underlying the Services or distributed in connection therewith (the &quot;Software&quot;) are the property of Omnex, its affiliates, its or service providers. Subject to the terms and conditions of these User Conditions, we hereby grant you a non-transferable, non-sublicensable and non-exclusive right and license to use the object code of any Software on your device(s) solely in connection with the Services, provided that you agree not to copy (except as expressly provided herein), modify, create a derivative work of, reverse engineer, reverse assemble or otherwise attempt to discover any source code, sell, assign, sublicense, or otherwise transfer any right in the Software. Any rights not expressly granted herein are reserved by us.</p>
            <p><div className='text-[#253D84] font-bold'>Trademarks</div>OMNEX GROUP is a registered trademark of Omnex Group, Inc. in the United States and other countries (US Registration No. 90784695). Omnex Group, Inc. owns or has the exclusive right to use the domain name www.omnexgroup.com.</p>
            </div>

            {/* Security */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Security</h3>
                <p>The security of your information and the integrity of your account is of the upmost importance to us. However, the Internet is a popular forum for scams. Please exercise caution and do not send money to anyone that you do not know personally or reveal any personal information to anyone or business that you have not verified. In particular, you should be cautious of deals or offers that seem too good to be true.</p>
                <p>If you think your username and password have been lost or stolen, or if someone may use them without your permission, or that you&apos;ve been the victim of fraud please contact us immediately at <a className='font-medium underline break-words' href="security@omnexgroup.com">security@omnexgroup.com</a>. If you are aware of anyone or any entity that is using the Services inappropriately, please e-mail us at <a className='font-medium underline break-words' href="security@omnexgroup.com">security@omnexgroup.com</a>. If you receive any fake (phishing) e-mails purporting to be from an Omnex Group company, or encounter any &quot;mirrored&quot; Omnex sites, please forward them to us or let us know at <a className='font-medium underline break-words' href="security@omnexgroup.com">security@omnexgroup.com</a></p> 
                <p>We, on occasion and at our own discretion, may send alerts via email or text messages to you with instructions to change your passwords for security purposes. Users who do not change their passwords at our direction will be subject to account termination if, in our sole discretion, the account&apos;s security is at risk.</p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Disclaimer of Warranties</h3>
                <p>THE SERVICES AND SOFTWARE, IF APPLICABLE, ARE PROVIDED &quot;AS IS&quot; AND WITHOUT ANY WARRANTY OR CONDITION, EXPRESS, IMPLIED OR STATUTORY. WE, OUR SUBSIDIARIES, EMPLOYEES, SUPPLIERS, VENDORS, AND SERVICE PROVIDERS SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.</p>
                <p>We make reasonable efforts to ensure that Orders are processed in a timely manner, but we make no representations or warranties regarding the time needed to complete processing because the Services are largely dependent on many factors outside our control. Some jurisdictions do not allow the disclaimer of implied warranties, so the foregoing disclaimer may not apply to you. Notwithstanding the foregoing, you may have a right to a refund as expressly described herein.</p>
            </div>

            {/* Waiver and Bar of Class Action Claims */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Waiver and Bar of Class Action Claims</h3>
                <p>All legal claims or actions arising from or relating to an order or the Services provided by us shall be brought only in a party&apos;s individual capacity. No party shall pursue any claim as a class representative or as a class member, unless such person has opted-out of this provision by calling us within 96 hours of placing an Order. You will be required to provide certain information to allow us to identify you as the Sender of the particular Order.</p>
            </div>

            {/* Limitation of Liability */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Limitation of Liability</h3>
                <p>EXCEPT FOR CLAIMS UNDER SECTION 2102 OF THE CALIFORNIA FINANCIAL CODE ARISING FROM TRANSACTIONS ORIGINATING IN CALIFORNIA, IN NO EVENT SHALL WE, OUR SUPPLIERS, VENDORS, SERVICE PROVIDERS, OR THEIR RESPECTIVE SUBSIDIARIES, OFFICERS, AGENTS, PARTNERS, EMPLOYEES OR CONSULTANTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES BEYOND THE SUM OF $500.00 (IN ADDITION TO REFUNDING THE TRANSACTION AMOUNT AND TRANSFER FEES), INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES) RESULTING FROM NEGLIGENCE ON THE PART OF AN OMNEX GROUP COMPANY, ITS SUPPLIERS, VENDORS, SERVICE PROVIDERS, OR THEIR RESPECTIVE SUBSIDIARIES, OFFICERS, AGENTS, PARTNERS, EMPLOYEES OR CONSULTANTS.</p>
            </div>

            {/* Indemnity */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Indemnity</h3>
                <p>You agree to indemnify and hold Omnex, its affiliates, directors, officers, employees, agents, suppliers, vendors, Service Providers, and their respective subsidiaries, directors, officers, agents, partners, employees, and consultants harmless from any claim or demand, including reasonable attorneys&apos; fees, made by any third party due to or arising out of your use of the Services, your connection to the Services, your violation of the User Agreement, or your violation of any rights of a third party.</p>    
            </div>

            {/* Dispute Resolution and Governing Law */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Dispute Resolution and Governing Law</h3>
                <p><span className='font-bold'>Governing Law.</span> This User Agreement shall be governed according to the laws of the State of New York and all activities performed in connection with the Services shall be deemed to have been performed in New York. Any controversy, dispute, or claim arising out of or relating to the Services or User Agreement (a &quot;Claim&quot;) shall be governed by and construed in accordance with the laws of New York, except that body of law governing conflicts of law.</p>
                <p><span className='font-bold'>Disputes.</span> If a dispute arises between you and us, our goal is to address your concerns and resolve them expeditiously. If we are unable to address your concerns to your satisfaction, we will seek to provide you with a neutral and cost-effective means of resolving the dispute quickly. Disputes regarding the Services may be reported to Customer Service at the addresses and phone number shown above.</p>    
                <p><span className='font-bold'>Arbitration.</span> For any claim (excluding claims for injunctive or other equitable relief) where the total amount of the award sought is less than $10,000.00 USD, we may elect to resolve the dispute through binding non-appearance-based arbitration. If we elect arbitration, we will initiate such arbitration through an established alternative dispute resolution (&quot;ADR&quot;) provider mutually agreed upon by the parties. The ADR provider and the parties must comply with the following rules: (i) the arbitration shall be conducted by telephone, online and/or be solely based on written submissions, with the specific manner to be chosen by the party initiating the arbitration; (ii) the arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise mutually agreed by the parties; and (iii) any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.</p>
                <p><span className='font-bold'>Forum for Disputes.</span> Except as otherwise agreed by the parties or as described above, you agree that any claim or dispute you may have against us must be resolved by a court located in New York, New York. You agree to submit to the personal jurisdiction of the courts located within New York, New York for the purpose of litigating all such claims or disputes.</p>
                <p><span className='font-bold'>Improperly Filed Litigation.</span> All claims you bring against us must be resolved in accordance with this User Agreement. All claims filed or brought contrary to this Section &quot;Dispute Resolution and Governing Law&quot; shall be considered improperly filed, and a breach of this User Agreement. Should you file a claim contrary to this Section, we may recover attorneys&apos; fees and costs (including in-house attorneys and paralegals) up to $2,500.00 USD from you, provided that we have notified you in writing of the improperly filed claim, and you have failed to promptly withdraw the improperly filed claim.</p>
            </div>

            {/* Miscellaneous */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Miscellaneous</h3>
                <p><span className='font-bold'>Customer Updates.</span> You must promptly update us with any change in your e-mail address, telephone number and billing address by updating your profile on our websites. If we do not have correct contact information, we may not be able to notify you with important information or changes in your Order status, or process your order.</p>
                <p><span className='font-bold'>Entire Agreement.</span> This User Agreement constitutes the entire agreement between you and us and governs your use of the services, superseding any prior agreements, including any earlier versions of this User Agreement.</p>
                <p><span className='font-bold'>No Waiver.</span> Our failure to exercise or enforce any right or provision of the User Agreement shall not constitute a waiver of such right or provision. If any provision of the User Agreement is found by an arbitrator or court of competent jurisdiction to be invalid, the parties nevertheless agree that the arbitrator or court should endeavor to give appropriately valid effect to the intention of the User Agreement as reflected in the provision, and the other provisions of the User Agreement shall remain in full force and effect.</p>
                <p><span className='font-bold'>Modification.</span> We may modify this User Agreement from time to time without notice to you, except as may be required by law. You can review the most current version of the User Agreement at any time by reviewing our websites. You may terminate your use of the Services if you do not agree with any modification or amendment. If you use the Services after the effective date of an amendment or modification, you shall be deemed to have accepted that amendment or modification. You agree that you shall not modify this User Agreement and acknowledge that any attempts by you to modify this User Agreement shall be void.</p>
                <p><span className='font-bold'>Language.</span> In the event there is any inconsistency between the English version of text and any other version, including with respect to the User Agreement and the Privacy Policy, the English text shall be binding.</p>
                <p className='font-bold'>Software available in connection with the Services and the transmission of applicable data, if any, is subject to United States export controls. You must comply with all export and re-export restrictions and regulations of the Department of Commerce and other United States agencies and authorities that may apply to the Software. Downloading or using the software is at your sole risk. Recognizing the global nature of the Internet, you agree to comply with all local rules and laws regarding your use of the Services, including as it concerns online conduct and acceptable content.</p>
                    
            </div>

            {/* Contact Information */}
            <div className='flex flex-col gap-10'>
                <h3 className='text-[#253D84]'>Contact Information</h3>
                <div>
                    <p>Questions, notifications, compliments, complaints and requests for refunds or further information can be sent to us as follows:</p>
                    <ul className='list-disc pl-[20px]'>
                    <li>On-line: <a className='font-medium underline' href="www.omnexgroup.com">www.omnexgroup.com</a></li>
                    <li>Via Email: <a className='font-medium underline break-words' href="customerservice@omnexgroup.com">customerservice@omnexgroup.com</a></li>
                    <li>By Telephone: (866) 819-0119</li>
                    <li>By Mail: Omnex Group, Inc., Attn: Customer Service, 580 Sylvan Ave LL-A, Englewood Cliffs, NJ 07632, U.S.A</li>
                </ul>
                </div>
            </div>

 
        

        </div>
        
      </div>
      
    </main>
  )
}
{/* <a className='font-medium underline break-words' href="customerservice@omnexgroup.com">customerservice@omnexgroup.com</a>  <span className='font-bold'>Right to Refund:</span>   <div className='text-[#253D84] font-bold'>Trademarks</div>*/}