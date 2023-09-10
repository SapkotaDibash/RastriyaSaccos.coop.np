const FILE_LINKS_OBJ = {
    "root": [

        { "display_name": 'PDF Files', 'link_obj': 'coop_imp_files' },
        // { "display_name": 'Coop_Imp Files_2', 'link_obj': 'coop_imp_files_2' },
        { "display_name": 'Links', 'link_obj': 'Links' },


    ],


    "coop_imp_files": [
        
        { "display_name": 'saving policy', 'link_obj': './files/Policies/saving_policy.pdf' },
        { "display_name": 'Member Survey Form', 'link_obj': './files/Policies/member_Survey_format.pdf' },
        { "display_name": 'Business Plan', 'link_obj': './files/Policies/4_Year_Business_plan_final.pdf' },

    ],

    "coop_imp_files_2": [

        // { "display_name": 'File_2', 'link_obj': './files/coop_imp_files/BoD-Self-evaluation-final.xlsx' },

    ],

    "Links": [
        { "display_name": 'Copomis Login', 'link_obj': 'https://copomis.mocpa.gov.np/user/login' },
        { "display_name": 'सहकारी बिभाग', 'link_obj': 'http://www.deoc.gov.np/' },
        { "display_name": 'प्रदेश सहकारी बिभाग', 'link_obj': 'https://mocat.bagamati.gov.np/' },
        { "display_name": 'File Compress', 'link_obj': 'https://www.wecompress.com/en/' },


    ],



}
createHTML();













function createHTML() {
    for (let i = 0; i < FILE_LINKS_OBJ['root'].length; i++) {
        const r = FILE_LINKS_OBJ['root'][i];
        const link_key = r['link_obj']
        const subLinks_HTM = subLinks(FILE_LINKS_OBJ[link_key])



        let OPEN_STATUS = (i == 0 ||i == 1) ? 'open' : '';

        const HTML = `            
   
    <details class="detail" ${OPEN_STATUS}>
        <summary><strong>${r['display_name']}</strong></summary>
        <div class="links_container">${subLinks_HTM}</div>
    </details>

    `;


        $('.container').append(HTML);


    }
}


function subLinks(OBJ) {
    let HTML_LINKS = '';
    for (let i = 0; i < OBJ.length; i++) {
        const r = OBJ[i];
        const SN = ( i + 1).toString().padStart(2, 0);
        HTML_LINKS += `${SN}. <a href="${r['link_obj']}">${r['display_name']}</a><br>`;
    }
    return HTML_LINKS;
}





$('summary').click(function () {
    $('.detail').removeAttr('open');
    $(this).attr('open')
});