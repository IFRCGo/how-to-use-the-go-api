import matplotlib.pyplot as plt, mpld3
import requests
from collections import Counter
import numpy as np


def fetchProjects():
    return requests.get("https://goadmin.ifrc.org/api/v2/project/?country=NPL").json()['results']


def getDataFromProjects(projects):
    counter = Counter()
    for project in projects:
        counter[project['primary_sector_display']] += 1
    return counter


def generateChart(data):
    labels, values = zip(*data.items())

    indexes = np.arange(len(labels))

    fig, ax = plt.subplots()

    plt.bar(indexes, values)
    plt.xticks(indexes * 1.0, labels)

    # plt.show()
    mpld3.save_html(fig, "src/assets/example1.html")


if __name__ == "__main__":
    projects = fetchProjects()
    data = getDataFromProjects(projects)
    generateChart(data)
