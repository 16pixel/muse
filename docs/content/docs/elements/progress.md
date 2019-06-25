---
title: Progress
menu:
  docs:
    parent: "elements"
    weight: 40
---
{{< capture >}}
    <progress class="progress" value="15" max="100">
    %15
    </progress>
{{< /capture >}}

<hr>

{{< capture >}}
<div class="cd-demo">
    <progress class="progress progress-primary" value="15" max="100">%15</progress>
    <progress class="progress progress-info" value="30" max="100">%30</progress>
    <progress class="progress progress-success" value="45" max="100">%45</progress>
    <progress class="progress progress-warning" value="60" max="100">%60</progress>
    <progress class="progress progress-danger" value="75" max="100">%75</progress>
</div>
{{< /capture >}}

<hr>

{{< capture >}}
<div class="cd-demo">
    <progress class="progress progress-sm" value="15" max="100">%15</progress>
    <progress class="progress" value="30" max="100">%30</progress>
    <progress class="progress progress-lg" value="45" max="100">%45</progress>
</div>
{{< /capture >}}