function handle_tag_search_form(event) {
    var tag;

    tag = $('#tag-search').val();

    document.location = 'https://md5file.com/search/' + encodeURIComponent(tag);

    return false;
}

$(document).ready(function() {
    $('#tag-search-form').submit(handle_tag_search_form);
});