function loadTableData(filterId) {
    fetch("./data.json")
        .then((response) => response.json())
        .then((data) => {
            const item = data.find((item) => item.SoPhieu === filterId);

            const tbody = document.querySelector("#myTable");

            var lol = "";

            if (item !== undefined) {
                lol += `
          <tr style="height: 24.75pt">
          <td
            colspan="6"
            style="
              padding-top: 0.75pt;
              padding-right: 0.75pt;
              padding-left: 0.75pt;
              vertical-align: middle;
            "
          >
            <p
              style="text-indent: 0pt; font-size: 12pt; vertical-align: middle"
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Phường/Xã (1):</span
              ><span class="font231" style="vertical-align: middle;font-weight: bold"
                > Vĩnh Thanh</span
              >
            </p>
          </td>
          <td
           rowspan="2"
            colspan="13"
            style="
              padding-top: 0.75pt;
              padding-right: 0.75pt;
              padding-left: 0.75pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                text-indent: 0pt;
                text-align: center;
                font-size: 18pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >PHIẾU ĐIỀU TRA PHỔ CẬP GIÁO DỤC - CHỐNG MÙ CHỮ</span
              >
            </p>
          </td>
          <td
            colspan="8"
            style="
              padding-top: 0.75pt;
              padding-right: 0.75pt;
              padding-left: 0.75pt;
              vertical-align: middle;
            "
          >
            <p
              style="text-indent: 0pt; font-size: 12pt; vertical-align: middle"
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Số phiếu (5):</span
              ><span class="font231" style="vertical-align: middle;font-weight:bold"
                > ${item.SoPhieu}</span
              >
            </p>
          </td>
        </tr>

 <tr style="height: 24.75pt">
                    <td
                        colspan="6"
                        style="
                            padding-top: 0.75pt;
                            padding-right: 0.75pt;
                            padding-left: 0.75pt;
                            vertical-align: middle;
                        "
                    >
                        <p
                            style="
                                text-indent: 0pt;
                                font-size: 12pt;
                                vertical-align: middle;
                            "
                        >
                            <span
                                style="
                                    font-weight: bold;
                                    vertical-align: middle;
                                "
                                >KP/Thôn/Ấp (2):</span
                            ><span
                                class="font231"
                                style="
                                    vertical-align: middle;
                                    font-weight: bold;
                                "
                            > ${item.ChuHo.DiaChi}</span>
                        </p>
                    </td>

                    <td
                        colspan="8"
                        style="
                            padding-top: 0.75pt;
                            padding-right: 0.75pt;
                            padding-left: 0.75pt;
                            vertical-align: middle;
                        "
                    >
                        <p
                            style="
                                text-indent: 0pt;
                                font-size: 12pt;
                                vertical-align: middle;
                            "
                        >
                            <span
                                style="
                                    font-weight: bold;
                                    vertical-align: middle;
                                "
                                >Diện cư trú (6): </span
                            ><span
                                class="font231"
                                style="
                                    vertical-align: middle;
                                    font-weight: bold;
                                "
                                > ${item.ChuHo.DienCuTru}</span
                            >
                        </p>
                    </td>
                </tr>

        <tr style="height: 27.75pt">
          <td
            colspan="6"
            style="
              border-bottom-style: solid;
              border-bottom-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.75pt;
              padding-left: 0.75pt;
              vertical-align: middle;
            "
          >
            <p
              style="text-indent: 0pt; font-size: 12pt; vertical-align: middle"
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Địa chỉ (3):</span
              ><span class="font231" style="vertical-align: middle; font-weight:bold"
                > ${item.ChuHo.DiaChi}</span
              >
            </p>
          </td>
          <td
            colspan="13"
            style="
              border-bottom-style: solid;
              border-bottom-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.75pt;
              padding-left: 0.75pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                text-indent: 0pt;
                text-align: center;
                font-size: 14pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle"
                >Họ và tên chủ hộ (4):</span
              ><span style="vertical-align: middle;font-weight: bold"
                > ${item.ChuHo.Ten}</span
              >
            </p>
          </td>
          <td
            colspan="8"
            style="
              border-bottom-style: solid;
              border-bottom-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.75pt;
              padding-left: 0.75pt;
              vertical-align: middle;
            "
          >
            <p
              style="text-indent: 0pt; font-size: 12pt; vertical-align: middle"
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Điện thoại: (7):</span
              ><span class="font231" style="vertical-align: middle"
                >${item.ChuHo.DienThoai}</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 28.5pt">
          <td
            rowspan="3"
            style="
              width: 2.68%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">STT</span>
            </p>
          </td>
          <td
            colspan="4"
            rowspan="3"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >HỌ VÀ TÊN ĐỐI TƯỢNG</span
              ><br /><span class="font41" style="vertical-align: middle"
                >(Lớn tuổi ghi trước)</span
              >
            </p>
          </td>
          <td
            colspan="2"
            rowspan="3"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >TÊN LỚP ĐANG HỌC </span
              ><span class="font41" style="vertical-align: middle"
                >(Theo năm học)</span
              >
            </p>
          </td>
          <td
            rowspan="3"
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >TÊN TRƯỜNG - HUYỆN ĐANG HỌC </span
              ><span class="font41" style="vertical-align: middle"
                >(Tương ứng với từng năm học)</span
              >
            </p>
          </td>
          <td
            colspan="7"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Thông tin Tốt nghiệp (Hoàn thành)</span
              >
            </p>
          </td>
          <td
            colspan="2"
            rowspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Học xong</span
              >
            </p>
          </td>
          <td
            colspan="3"
            rowspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Bỏ học</span
              >
            </p>
          </td>
          <td
            colspan="4"
            rowspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Mù chữ</span
              >
            </p>
          </td>
          <td
            rowspan="3"
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Khuyết Tật</span
              >
            </p>
          </td>
          <td
            rowspan="3"
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Chuyển đến, chuyển đi, chết</span
              >
            </p>
          </td>
          <td
            rowspan="3"
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >Ghi chú</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 16.5pt">
          <td
            colspan="4"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >MN -&gt;THPT</span
              >
            </p>
          </td>
          <td
            colspan="3"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >TN nghề</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 48.1pt">
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Cấp học</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Bổ túc</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Năm</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Bậc </span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Năm </span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Lớp</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Năm</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Lớp</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Năm</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Học XMC</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">CN XMC</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Tái mù chữ</span>
            </p>
          </td>
        </tr>
        <tr style="height: 17.25pt">
          <td
            style="
              width: 2.68%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="4"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(8)</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(9)</span>
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(10)</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(11)</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(12)</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(13)</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(14)</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(15)</span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(16)</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(17)</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(18)</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(19)</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">('20)</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(21)</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(22)</span>
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(23)</span>
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(24)</span>
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 9pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">(25)</span>
            </p>
          </td>
        </tr>
        <tr style="height: 18pt">
          <td
            rowspan="5"
            style="
              width: 2.68%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >1</span
              >
            </p>
          </td>
          <td
            colspan="4"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                font-weight: bold;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
               ${item.ChuHo.Ten}
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20 -</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle">20</span>
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.LopHoc}
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.TruongDgHoc}
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                text-transform: uppercase;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.BangTotNghiep}
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.BoTuc}
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                font-weight: bold;
              "
            >
              <span style=" -aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.NamTocNghiep}
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.BacTNNghe}
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.NamTNNghe}
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.HocXongLop}
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.HocXongNam}
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.BoHocLop}
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${item.ChuHo.BoHocNam}
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              <!-- Học XMC -->
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              <!-- CN XMC -->
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              <!-- Tái mù chữ -->
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              <!-- Khuyết Tật -->
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
              <!-- Chuyển đến, chuyển đi, chết -->
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
              <!-- Ghi chú -->
            </p>
          </td>
        </tr>
        <tr style="height: 18pt">
          <td
            colspan="4"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">QH với chủ hộ:</span
              ><span style="vertical-align: middle; font-weight: bold"
                >${item.ChuHo.QHVoiChuHo} </span
              >
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle"
                >- 20</span
              >
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
        </tr>
        <tr style="height: 18pt">
          <td
            colspan="3"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
                font-weight:bold
              "
            >
              <span style="vertical-align: middle">Ngày sinh: </span>
              ${item.ChuHo.NgaySinh}
            </p>
          </td>
          <td
            colspan="1"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle"
                >- 20</span
              >
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
        </tr>
        <tr style="height: 18pt">
          <td colSpan="2"
            style="
              width: 5.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Giới tính:</span>
                ${item.ChuHo.GioiTinh}
              </p>
          </td>
          <td
            style="
              width: 5.58%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">DT: </span
              ><span class="font211" style="vertical-align: middle;font-weight:bold">${
                  item.ChuHo.DanToc
              }</span>
            </p>
          </td>
          <td
            style="
              width: 6.88%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle;font-weight:bold">TG: ${
                  item.ChuHo.TonGiao
              }</span>
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle"
                >- 20</span
              >
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
        </tr>
        <tr style="height: 18pt">
          <td
            colspan="4"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Cha, mẹ, Ng đỡ đầu: </span
              ><span class="font241" style="vertical-align: middle"
                >${
                    item.ChuHo.QHVoiChuHo !== "Vợ" &&
                    item.ChuHo.QHVoiChuHo !== "Chủ Hộ"
                        ? item.ChuHo.Ten
                        : ""
                }</span
              >
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle"
                >- 20</span
              >
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
        </tr>
        `;

                for (let i = 0; i < item.ThanhVien.length; i++) {
                    const element = item.ThanhVien[i];
                    lol += `
        <tr style="height: 18pt">
          <td
            rowspan="5"
            style="
              width: 2.68%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle"
                >
                <!-- STT -->
                ${i + 2}</span
              >
            </p>
          </td>
          <td
            colspan="4"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10.5pt;
                font-weight: bold;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.Ten}
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20 -</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle">20</span>
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
              ${element.LopHoc}
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
              ${element.TruongDgHoc}
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                text-transform: uppercase;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.BangTotNghiep}
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.BoTuc}
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                font-weight: bold;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.NamTocNghiep}
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.BacTNNghe}
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.NamTNNghe}
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.HocXongLop}
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.HocXongNam}
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.BoHocLop}
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              ${element.BoHocNam}
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              <!-- Học XMC -->
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              <!-- CN XMC -->
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
              <!-- Tái mù chữ -->
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
                <!-- Khuyết Tật-->
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
              <!-- Chuyển đến, chuyển đi, chết -->
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
                            <!-- Ghi chú -->
            </p>
          </td>
        </tr>
        <tr style="height: 18pt">
          <td
            colspan="4"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">QH với chủ hộ:</span
              ><span style="vertical-align: middle; font-weight: bold"
                >${element.QHVoiChuHo} </span
              >
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle"
                >- 20</span
              >
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
        </tr>
        <tr style="height: 18pt">
          <td
            colspan="3"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
                font-weight:bold
              "
            >
              <span style="vertical-align: middle">Ngày sinh: </span>
              ${element.NgaySinh}
            </p>
          </td>
          <td
            colspan="1"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle"
                >- 20</span
              >
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
        </tr>
        <tr style="height: 18pt">
          <td colSpan="2"
            style="
              width: 5.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Giới tính:</span>
                ${element.GioiTinh}
              </p>
          </td>
          <td
            style="
              width: 5.58%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">DT:</span
              ><span class="font211" style="vertical-align: middle;font-weight:bold">${
                  item.ChuHo.DanToc
              }</span>
            </p>
          </td>
          <td
            style="
              width: 6.88%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle; font-weight:bold">TG: ${
                  item.ChuHo.TonGiao
              }</span>
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle"
                >- 20</span
              >
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
        </tr>
        <tr style="height: 18pt">
          <td
            colspan="4"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                font-size: 10.5pt;
                vertical-align: middle;
              "
            >
              <span style="vertical-align: middle">Cha, mẹ, Ng đỡ đầu: </span
              ><span style="vertical-align: middle;font-weight:bold"
                >${element.HoVaTenChaHoacMe}</span
              >
            </p>
          </td>
          <td
            style="
              width: 7.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
                vertical-align: middle;
              "
            >
              <span style="font-weight: bold; vertical-align: middle">20</span
              ><span
                style="
                  font-weight: bold;
                  vertical-align: middle;
                  -aw-import: spaces;
                "
                >&nbsp;&nbsp;&nbsp; </span
              ><span style="font-weight: bold; vertical-align: middle"
                >- 20</span
              >
            </p>
          </td>
          <td
            style="
              width: 5.16%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 7%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 11pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.62%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.12%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.86%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.04%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.54%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 3.1%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.24%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            colspan="2"
            style="
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 2.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.36%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="font-weight: bold; -aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.56%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
          <td
            style="
              width: 4.6%;
              border-style: solid;
              border-width: 0.75pt;
              padding-top: 0.75pt;
              padding-right: 0.38pt;
              padding-left: 0.38pt;
              vertical-align: middle;
            "
          >
            <p
              style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 0pt;
                text-align: center;
                font-size: 10pt;
              "
            >
              <span style="-aw-import: ignore">&nbsp;</span>
            </p>
          </td>
        </tr>
        `;
                }

                tbody.innerHTML = lol;
            }
        })
        .catch((error) => {
            console.error("Error loading JSON data:", error);
        });
}

function loadComboboxData() {
    const combobox = document.getElementById("combobox");

    // Fetch the data from a JSON file
    fetch("data.json") // Replace with the path to your actual JSON file
        .then((response) => response.json()) // Parse the JSON data
        .then((data) => {
            // Loop through each item in the data and create an option for the combobox
            data.forEach((item) => {
                const option = document.createElement("option");
                option.value = item.SoPhieu;
                option.textContent = `Số phiếu: ${item.SoPhieu} - ${item.ChuHo.Ten}`;
                combobox.appendChild(option);
            });
            combobox.selectedIndex = 0;
            loadTableData(combobox.value);
        })
        .catch((error) => console.error("Error loading data:", error)); // Handle any errors
}

document.getElementById("combobox").addEventListener("change", function () {
    const selectedId = this.value;

    if (selectedId) {
        loadTableData(selectedId);
    }
});
window.onload = loadComboboxData;
