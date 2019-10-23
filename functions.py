from globals import *
import requests, re, wget

def main() :
    rss_feed = get_feed(nerdcast_feed)
    get_urls(rss_feed)

def get_feed(site) :
    r           = requests.get(site)
    status_code = r.status_code

    if (status_code == 200) :
        sucess_message = "Requisition for {} is {}. Returning the HTML code.".format(site, status_code)
        print(sucess_message)
        return r.content.decode("UTF-8")

    else :
        failure_message = "Requisition for {} is {}.".format(site, status_code)
        print(failure_message)
        exit()

def get_urls(feed) :
    regex_urls = re.compile(r"<enclosure url=\"(.*)\" length")
    urls       = regex_urls.finditer(feed)

    for index in urls:
        current_episode_url    = index.group(1)
        request_episode        = requests.get(current_episode_url)
        status_code_of_episode = request_episode.status_code

        if (status_code_of_episode == 200) :
            message_of_url_is_valid = "Status : {} | Url : {}".format(status_code_of_episode, current_episode_url)
            print(message_of_url_is_valid)
            download_episode(current_episode_url)

        else :
            message_of_url_isnt_valid = "Episode Unavailable | STATUS : {} | URL : {}".format(status_code_of_episode, current_episode)
            print(message_of_url_isnt_valid)

def download_episode(url) :
    wget.download(url, "./")