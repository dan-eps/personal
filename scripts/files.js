function kanoodle_files() {
    document.getElementById("folders-content").innerHTML =
        `<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="bar fs-header" style="width: calc(40% - 22px)">Name</th>
      <th class="bar fs-header" style="text-align: end">Size</th>
      <th class="bar fs-header">Type</th>
      <th class="bar fs-header">Date Modified</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="icons/ICON/34.ico"/> .dist</td>
      <td style="text-align: right;"></td>
      <td>File Folder</td>
      <td>05/25/2024 5:50 PM</td>
    </tr>
    <tr>
      <td><img src="icons/ICON/34.ico"/> __pycache__</td>
      <td style="text-align: right;"></td>
      <td>File Folder</td>
      <td>07/06/2024 2:40 PM</td>
    </tr>
    <tr onclick="window.location='https://github.com/dan-eps/kanoodle/blob/main/board.py';">
      <td><img src="icons/python.png"/> board.py</td>
      <td style="text-align: right;">6 KB</td>
      <td>Python Source File</td>
      <td>09/15/2023 8:11 PM</td>
    </tr>
    <tr onclick="window.location='https://github.com/dan-eps/kanoodle/blob/main/main.py';">
      <td><img src="icons/python.png"/> main.py</td>
      <td style="text-align: right;">5 KB</td>
      <td>Python Source File</td>
      <td>01/03/2024 8:33 PM</td>
    </tr>
    <tr onclick="window.location='https://github.com/dan-eps/kanoodle/blob/main/menu.py';">
      <td><img src="icons/python.png"/> menu.py</td>
      <td style="text-align: right;">12 KB</td>
      <td>Python Source File</td>
      <td>09/15/2023 10:16 AM</td>
    </tr>
    <tr onclick="window.location='https://github.com/dan-eps/kanoodle/blob/main/piece.py';">
      <td><img src="icons/python.png"/> piece.py</td>
      <td style="text-align: right;">2 KB</td>
      <td>Python Source File</td>
      <td>08/24/2023 8:31 PM</td>
    </tr>
    <tr onclick="window.location='https://github.com/dan-eps/kanoodle/blob/main/exact_cover_converter.py';">
      <td><img src="icons/python.png"/> exact_cover_converter.py</td>
      <td style="text-align: right;">4.13 KB</td>
      <td>Python Source File</td>
      <td>03/10/2026 4:32 PM</td>
    </tr>
    <tr onclick="window.location='https://github.com/dan-eps/kanoodle/blob/main/README.md';">
      <td><img src="icons/ICON/403.ico"/> README.txt</td>
      <td style="text-align: right;">1 KB</td>
      <td>Text Document</td>
      <td>11/06/2025 8:50 PM</td>
    </tr><a/>
  </tbody>
</table>`
}

function shell_files() {
    document.getElementById("folders-content").innerHTML =
        `<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="bar fs-header" style="width: calc(40% - 22px)">Name</th>
      <th class="bar fs-header" style="text-align: end">Size</th>
      <th class="bar fs-header">Type</th>
      <th class="bar fs-header">Date Modified</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="icons/clogo.png"/> main.c</td>
      <td style="text-align: right;">5.16 KB</td>
      <td>C Source File</td>
      <td>09/22/2023 8:31 PM</td>
    </tr>
    <tr>
      <td><img src="icons/ICON/403.ico"/> README.txt</td>
      <td style="text-align: right;">1 KB</td>
      <td>Text Document</td>
      <td>11/06/2023 8:50 PM</td>
    </tr>
  </tbody>
</table>`;
}

function liftoff_files() {
    document.getElementById("folders-content").innerHTML =
        `<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="bar fs-header" style="width: calc(40% - 22px)">Name</th>
      <th class="bar fs-header" style="text-align: end">Size</th>
      <th class="bar fs-header">Type</th>
      <th class="bar fs-header">Date Modified</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><img src="icons/phplogo.png"/> calendars.php</td><td style="text-align:right;">17 KB</td><td>PHP Source File</td><td>05/27/2022 8:31 PM</td></tr>
    <tr><td><img src="icons/phplogo.png"/> events.php</td><td style="text-align:right;">3.87 KB</td><td>PHP Source File</td><td>05/26/2022 4:32 PM</td></tr>
    <tr><td><img src="icons/phplogo.png"/> create.php</td><td style="text-align:right;">2 KB</td><td>PHP Source File</td><td>05/30/2022 9:07 PM</td></tr>
    <tr><td><img src="icons/phplogo.png"/> mailing.php</td><td style="text-align:right;">1 KB</td><td>PHP Source File</td><td>05/27/2022 8:31 PM</td></tr>
    <tr><td><img src="icons/phplogo.png"/> manage.php</td><td style="text-align:right;">2 KB</td><td>PHP Source File</td><td>05/24/2022 7:35 PM</td></tr>
    <tr><td><img src="icons/phplogo.png"/> login.php</td><td style="text-align:right;">1 KB</td><td>PHP Source File</td><td>05/30/2022 11:45 AM</td></tr>
    <tr><td><img src="icons/phplogo.png"/> index.php</td><td style="text-align:right;">3 KB</td><td>PHP Source File</td><td>05/30/2022 11:12 AM</td></tr>
    <tr><td><img src="icons/ICON/403.ico"/> README.md</td><td style="text-align:right;">1 KB</td><td>Text Document</td><td>05/27/2022 8:25 PM</td></tr>
  </tbody>
</table>`;
}

function starwars_files() {
    document.getElementById("folders-content").innerHTML =
        `<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="bar fs-header" style="width: calc(40% - 22px)">Name</th>
      <th class="bar fs-header" style="text-align: end">Size</th>
      <th class="bar fs-header">Type</th>
      <th class="bar fs-header">Date Modified</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><img src="icons/js.png"/> shot.js</td><td style="text-align:right;">3 MB</td><td>JavaScript Source...</td><td>05/27/2019 1:15 PM</td></tr>
    <tr><td><img src="icons/js.png"/> explosion.js</td><td style="text-align:right;">3 MB</td><td>JavaScript Source...</td><td>05/26/2019 2:05 PM</td></tr>
    <tr><td><img src="icons/js.png"/> enemy.js</td><td style="text-align:right;">3 MB</td><td>JavaScript Source...</td><td>05/26/2019 2:05 PM</td></tr>
    <tr><td><img src="icons/html5.png"/> index.html</td><td style="text-align:right;">13.4 KB</td><td>HTML5 Document</td><td>06/10/2019 11:37 AM</td></tr>
    <tr><td><img src="icons/ICON/403.ico"/> README.md</td><td style="text-align:right;">2 KB</td><td>Text Document</td><td>06/10/2019 11:43 AM</td></tr>
  </tbody>
</table>`;
}

function maverick_files() {
    document.getElementById("folders-content").innerHTML =
        `<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="bar fs-header" style="width: calc(40% - 22px)">Name</th>
      <th class="bar fs-header" style="text-align: end">Size</th>
      <th class="bar fs-header">Type</th>
      <th class="bar fs-header">Date Modified</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><img src="icons/csharp.png"/> ComingSoon.cs</td><td style="text-align:right;">0 KB</td><td>C# Source File</td><td>11/19/2025 11:28 AM</td></tr>
    <tr><td><img src="icons/ICON/403.ico"/> README.md</td><td style="text-align:right;">2 KB</td><td>Text Document</td><td>11/19/2025 11:28 AM</td></tr>
  </tbody>
</table>`;
}

function projects_files() {
    document.getElementById("folders-content").innerHTML =
        `<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="bar fs-header" style="width: calc(40% - 22px)">Name</th>
      <th class="bar fs-header" style="text-align: end">Size</th>
      <th class="bar fs-header">Type</th>
      <th class="bar fs-header">Date Modified</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ondblclick="maverick_files();"><img src="icons/ICON/34.ico"/> MAVERICK</td>
      <td></td><td>File Folder</td><td>05/25/2024 5:50 PM</td>
    </tr>
    <tr>
      <td ondblclick="kanoodle_files();"><img src="icons/ICON/34.ico"/> Kanoodle Solver</td>
      <td></td><td>File Folder</td><td>07/06/2024 2:40 PM</td>
    </tr>
    <tr>
      <td ondblclick="shell_files();"><img src="icons/ICON/34.ico"/> Custom Shell</td>
      <td></td><td>File Folder</td><td>09/15/2023 8:11 PM</td>
    </tr>
    <tr>
      <td ondblclick="liftoff_files();"><img src="icons/ICON/34.ico"/> Liftoff Planner</td>
      <td></td><td>File Folder</td><td>01/03/2024 8:33 PM</td>
    </tr>
    <tr>
      <td ondblclick="starwars_files();"><img src="icons/ICON/34.ico"/> Star Wars Game</td>
      <td></td><td>File Folder</td><td>09/15/2023 10:16 AM</td>
    </tr>
  </tbody>
</table>`;
}

function blog_files() {
    document.getElementById("folders-content").innerHTML =
        `<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="bar fs-header" style="width: calc(40% - 22px)">Name</th>
      <th class="bar fs-header" style="text-align: end">Size</th>
      <th class="bar fs-header">Type</th>
      <th class="bar fs-header">Date Modified</th>
    </tr>
  </thead>
  <tbody>
    <tr><td onclick="showPopup(event,'notepad-popup','majorana_one.txt')"><img src="icons/notepad.png"/> majorana_one.txt</td><td></td><td>Text Document</td><td>02/28/2025 9:00 AM</td></tr>
    <tr><td onclick="showPopup(event,'notepad-popup','cci_engineering_merger.txt')"><img src="icons/notepad.png"/> cci_engineering_merger.txt</td><td></td><td>Text Document</td><td>05/25/2024 5:50 PM</td></tr>
    <tr><td onclick="showPopup(event,'notepad-popup','crowdstrike_oops.txt')"><img src="icons/notepad.png"/> crowdstrike_oops.txt</td><td></td><td>Text Document</td><td>07/06/2024 2:40 PM</td></tr>
    <tr><td onclick="showPopup(event,'notepad-popup','drexel_cybersecurity.txt')"><img src="icons/notepad.png"/> drexel_cybersecurity.txt</td><td></td><td>Text Document</td><td>09/15/2023 8:11 PM</td></tr>
    <tr><td onclick="showPopup(event,'notepad-popup','accessibility.txt')"><img src="icons/notepad.png"/> accessibility.txt</td><td></td><td>Text Document</td><td>09/15/2023 10:16 AM</td></tr>
    <tr><td onclick="showPopup(event,'notepad-popup','tech_communication.txt')"><img src="icons/notepad.png"/> tech_communication.txt</td><td></td><td>Text Document</td><td>08/24/2023 8:31 PM</td></tr>
  </tbody>
</table>`;
}
