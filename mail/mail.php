<?php

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'POST') {
exit();
}

$project_name = 'NatureGift';
$admin_email = 'contact@naturegifts.pl';
$form_subject = 'Заявка с сайта';
$message = 'hello';

// foreach ($_POST as $key => $value) {
// if ($value === ''){
// continue;
// }
//     $message .= "
//         <tr style='background-color: #f8f8f8'>
//             <td style='padding: 10px; border: 1px solid #e9e9e9'>$key</td>
//             <td style='padding: 10px; border: 1px solid #e9e9e9'>$value</td>
//         </tr>";
// }

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $admin_email\r\n";

// $message = "<table style='width: 100%'>
//     <tr style='background-color: #f8f8f8'>
//         <td style='padding: 10px; border: 1px solid #e9e9e9'>Name</td>
//         <td style='padding: 10px; border: 1px solid #e9e9e9'>Value</td>
//     </tr>
//     <tr>
//         <td style='padding: 10px; border: 1px solid #e9e9e9'>Name</td>
//         <td style='padding: 10px; border: 1px solid #e9e9e9'>Value</td>
//     </tr>
// </table>"

mail($admin_email, $form_subject, $message, $headers);